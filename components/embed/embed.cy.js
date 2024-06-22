describe('Embed Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-embed--embed&viewMode=story');
  });

  it('should render the embed iframe', () => {
    cy.get('iframe[src*="google.com/maps"]').should('exist');
  });

  it('should display correctly on different screen sizes', () => {
    const sizes = ['iphone-6', 'ipad-2'];

    sizes.forEach((size) => {
      cy.viewport(size);
      cy.get('iframe').should('be.visible');
    });
  });

});
