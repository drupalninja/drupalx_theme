describe('Newsletter Form Component', () => {
  beforeEach(() => {
    cy.visit('iframe.html?args=&id=editorial-newsletter-form--newsletter-form&viewMode=story');
  });

  it('should render the newsletter form component', () => {
    cy.get('.newsletter-form').should('be.visible');
  });

  it('should display the correct content in the newsletter form', () => {
    cy.get('.newsletter-form h3').should('contain.text', 'Sign up for our newsletter');
    cy.get('.newsletter-form p').should('contain.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  });

  it('should have an input field and a submit button', () => {
    cy.get('.newsletter-form .input-group input').should('have.attr', 'placeholder', 'Email Address');
    cy.get('.newsletter-form .btn-newsletter').should('contain.text', 'Submit');
  });

  it('should apply the correct modifier classes', () => {
    cy.get('.newsletter-form').should('have.class', 'border').and('have.class', 'p-4').and('have.class', 'rounded');
  });

  it('should be responsive and display correctly on various screen sizes', () => {
    cy.viewport('iphone-6');
    cy.get('.newsletter-form').should('be.visible');

    cy.viewport('ipad-2');
    cy.get('.newsletter-form').should('be.visible');

    cy.viewport(1280, 800);
    cy.get('.newsletter-form').should('be.visible');
  });
});
