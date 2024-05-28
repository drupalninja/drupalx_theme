/**
 * @file
 * Behaviors for the Filter Accordion.
 */
/* eslint-disable max-len */

(function (Drupal) {
  /**
   * Setup and attach the Tooltip behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.tooltip = {
    attach: function () {
      var bootstrap = window.bootstrap;

      if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = document.querySelectorAll(
          '[data-bs-toggle="tooltip"]'
        );
        [...tooltipTriggerList].map(
          (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
        );
      }
    }
  };
})(Drupal);
