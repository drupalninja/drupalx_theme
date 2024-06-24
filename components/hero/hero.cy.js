describe('Hero Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-hero--hero&viewMode=story');
  });

  it('should display the hero title', () => {
    cy.get('[class*="display-5"]').contains('Phasellus').should('exist');
  });

  it('should display the hero body text', () => {
    cy.get('.lead').contains('This copy is optional').should('exist');
  });

  it('should display the primary button with correct text', () => {
    cy.get('.btn-primary').contains('Link 1').should('exist');
  });

  it('should display the secondary button with correct text', () => {
    cy.get('.btn-outline-primary').contains('Link 2').should('exist');
  });

  it('should display the image at the top when layout is "image_top"', () => {
    cy.get('img.img-fluid.rounded').should('exist');
    cy.get('.mb-4.mb-lg-8 img').should('exist');
  });

  it('should respond correctly to different screen sizes', () => {
    // Test for mobile screen
    cy.viewport('iphone-6');
    cy.get('.mb-6.mb-lg-12.text-center').should('be.visible');

    // Test for tablet screen
    cy.viewport('ipad-2');
    cy.get('.mb-6.mb-lg-12.text-center').should('be.visible');

    // Test for desktop screen
    cy.viewport('macbook-15');
    cy.get('.mb-6.mb-lg-12.text-center').should('be.visible');
  });
});
