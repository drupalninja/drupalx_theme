describe('Form Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-form--form&viewMode=story');
  });

  it('should render the form with all input fields and labels correctly', () => {
    cy.get('form').within(() => {
      cy.get('label[for="inputEmail4"]').should('contain', 'Email');
      cy.get('input#inputEmail4').should('have.attr', 'type', 'email');

      cy.get('label[for="inputPassword4"]').should('contain', 'Password');
      cy.get('input#inputPassword4').should('have.attr', 'type', 'password');

      cy.get('label[for="inputAddress"]').should('contain', 'Address');
      cy.get('input#inputAddress').should('have.attr', 'placeholder', '1234 Main St');

      cy.get('label[for="inputAddress2"]').should('contain', 'Address 2');
      cy.get('input#inputAddress2').should('have.attr', 'placeholder', 'Apartment, studio, or floor');

      cy.get('label[for="inputCity"]').should('contain', 'City');
      cy.get('input#inputCity').should('exist');

      cy.get('label[for="inputState"]').should('contain', 'State');
      cy.get('select#inputState').should('exist');

      cy.get('label[for="inputZip"]').should('contain', 'Zip');
      cy.get('input#inputZip').should('exist');

      cy.get('input#gridCheck').should('have.attr', 'type', 'checkbox');
      cy.get('label[for="gridCheck"]').should('contain', 'Check me out');

      cy.get('button[type="submit"]').should('contain', 'Sign in');
    });
  });

  it('should be responsive and adapt correctly to different screen sizes', () => {
    const sizes = ['iphone-6', 'ipad-2'];

    sizes.forEach((size) => {
      cy.viewport(size);
      cy.get('form').should('be.visible');
    });
  });

  it('should check form submissions and handle validation', () => {
    cy.get('form').within(() => {
      cy.get('input#inputEmail4').type('invalid-email');
      cy.get('button[type="submit"]').click();
      cy.get('input#inputEmail4:invalid').should('exist');

      cy.get('input#inputEmail4').clear().type('valid@example.com');
      cy.get('input#inputPassword4').type('password123');
      cy.get('input#inputCity').type('CityName');
      cy.get('select#inputState').select('...');
      cy.get('input#inputZip').type('12345');
      cy.get('input#gridCheck').check();
      cy.get('button[type="submit"]').click();
    });
  });
});
