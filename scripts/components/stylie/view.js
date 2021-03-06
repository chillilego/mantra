import $ from 'jquery';
import _ from 'underscore';
import Lateralus from 'lateralus';
import template from 'text!./template.mustache';
import Stylie from '@jeremyckahn/stylie';
import HidableComponent from 'aenima/components/hidable/main';

const Base = Lateralus.Component.View;
const baseProto = Base.prototype;
const $body = $(document.body);

const StylieComponentView = Base.extend({
  template,

  lateralusEvents: {
    requestOpenStylie() {
      this.wasPlaying = this.collectOne('isPlaying');
      this.emit('requestQuickCloseHelp');
      this.emit('requestPause');
      this.emit('pauseKeybindings');

      const customCurves = this.collectOne('customCurves');
      this.emit('quarantineCustomCurves');

      this.stylie = new Stylie(this.$stylieRoot[0], {
        isEmbedded: true,
        embeddedImgRoot: '',
      });

      // This has to be _.deferred so as to overwrite the custom curves set
      // by Stylie's deferredInitialize method
      _.defer(() => {
        customCurves.forEach(customCurve => {
          this.stylie.trigger('setCustomCurve', customCurve);
        });
      });

      $body.on('keydown', this.escapeHandler);
      this.hidableView.quickFadeIn();

      // Force the focus away from anything in background so that it cannot
      // be selected once Stylie is opened.
      //
      // This feels like a dirty hack, but I couldn't find a better solution.
      this.$('button').focus();
      $(document.activeElement).blur();
    },

    requestCloseStylie() {
      $body.off('keydown', this.escapeHandler);
      this.stylie.emit('requestPause');

      const customCurves = this.collectOne('customCurves');

      // Ensure that that there are no null reference errors to custom curves
      // due the a mismatch in the number of custom curves set by Stylie
      // versus Mantra
      this.emit('unquarantineCustomCurves');

      // Backfill any custom curves from Stylie into Manta
      customCurves.forEach(customCurve => {
        this.emit('setCustomCurve', customCurve);
      });

      this.hidableView.quickHide(() => {
        this.stylie.dispose();
        this.emit('resumeKeybindings');

        if (this.wasPlaying) {
          this.emit('requestPlay');
        }
      });
    },
  },

  events: {
    'click .cancel': function() {
      this.emit('requestCloseStylie');
    },

    'click .confirm': function() {
      this.emit('requestRecordUndoState');
      this.lateralus.loadTimeline(this.stylie.exportTimelineForMantra(), true);

      this.emit('requestCloseStylie');
    },
  },

  /**
   * @param {Object} [options] See http://backbonejs.org/#View-constructor
   */
  initialize() {
    baseProto.initialize.apply(this, arguments);

    this.hidableView = this.addSubview(HidableComponent.View, {
      el: this.el,
      startHidden: true,
    });

    this.escapeHandler = evt => {
      if (
        evt.target === document.body &&
        evt.which === 27 // 27 === escape key
      ) {
        this.emit('requestCloseStylie');
      }
    };
  },
});

export default StylieComponentView;
