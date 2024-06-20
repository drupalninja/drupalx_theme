describe('Media Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-media--media&viewMode=story');
  });

  it('should render the media component correctly', () => {
    cy.get('.media img').should('have.attr', 'src', './images/card.webp');
    cy.get('.media img').should('have.class', 'img-fluid');
    cy.get('.media img').should('have.class', 'rounded');
    cy.get('.media img').should('have.attr', 'alt', 'test image');
  });

  context('Responsive Design Tests', () => {
    const sizes = ['iphone-6', 'ipad-2'];

    sizes.forEach((size) => {
      it(`should display correctly on ${size}`, () => {
        cy.viewport(size);
        cy.get('.media img').should('be.visible').and(($img) => {
          const width = $img.width();
          const parentWidth = $img.parent().width();
          expect(width).to.equal(parentWidth);
        });
      });
    });
  });
});
