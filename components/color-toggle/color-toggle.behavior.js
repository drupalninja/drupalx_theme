/**
 * @file
 * Behaviors for the Carousel.
 */
/* eslint-disable max-len */

(function (Drupal) {
  /**
   * Setup and attach the Carousel behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.colorToggle = {
    attach: function () {
      document.addEventListener('DOMContentLoaded', () => {
        const htmlElement = document.documentElement;
        const switchElement = document.getElementById('darkModeSwitch');
        const switchIconElement = document.querySelector(
          '.darkmode-switch .material-symbols-outlined'
        );

        switchElement.addEventListener('change', function () {
          if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            switchIconElement.textContent = 'dark_mode';
          }
          else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            switchIconElement.textContent = 'light_mode';
          }
        });
      });
    }
  };
})(Drupal);
