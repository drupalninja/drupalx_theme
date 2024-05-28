/**
 * @file
 * Behaviors for the Filter Accordion.
 */
/* eslint-disable max-len */

(function (Drupal) {

  /**
   * Setup and attach the Popover behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.popover = {
    attach: function () {
      var bootstrap = window.bootstrap;
      if (typeof bootstrap !== 'undefined') {
        const popoverTriggerList = document.querySelectorAll(
          '[data-bs-toggle="popover"]'
        );
        [...popoverTriggerList].map(
          (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
        );
      }
    }
  };
})(Drupal);
