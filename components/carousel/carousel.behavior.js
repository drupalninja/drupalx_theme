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
  Drupal.behaviors.carousel = {
    attach: function () {
      const carouselItem = document.querySelector(
        '.carousel-single .carousel-item:first-child'
      );
      if (carouselItem) {
        carouselItem.classList.add('active');
      }
    }
  };
})(Drupal);
