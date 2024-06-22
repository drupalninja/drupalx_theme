describe('Card Group Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-card-group--card-group&viewMode=story');
  });

  it('should display the card group section title', () => {
    cy.get('.card-group-heading')
      .should('be.visible')
      .and('contain', 'Latest Articles');
  });

  it('should display the correct number of cards', () => {
    cy.get('.card')
      .should('be.visible')
      .and('have.length', 6);
  });

  it('should display the card image, title, tags, summary, and links', () => {
    cy.get('.card').each(($card) => {
      cy.wrap($card).find('.card-img-top').should('be.visible');
      cy.wrap($card).find('.card-title').should('be.visible');
      cy.wrap($card).find('.badge').should('be.visible');
      cy.wrap($card).find('.card-text').should('be.visible');
      cy.wrap($card).find('.btn').should('be.visible');
    });
  });

  context('Responsive Design', () => {
    it('should display cards in a single column on mobile', () => {
      cy.viewport('iphone-6');
      cy.get('.card-group .col-sm-6').should('have.length', 6);
    });

    it('should display cards in two columns on tablet', () => {
      cy.viewport('ipad-mini');
      cy.get('.card-group .col-lg-4').should('have.length', 6);
    });

    it('should display cards in three columns on desktop', () => {
      cy.viewport('macbook-15');
      cy.get('.card-group .col-lg-4').should('have.length', 6);
    });
  });
});

describe('Card Group Stats Component', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=editorial-card-group--card-group-stats&viewMode=story');
  });

  it('should display the card group stats section title', () => {
    cy.get('.card-group-heading')
      .should('be.visible')
      .and('contain', 'Top Stats');
  });

  it('should display the correct number of stat cards', () => {
    cy.get('.card-group .stat-item')
      .should('be.visible')
      .and('have.length', 3);
  });

  it('should display the stat icon, heading, and body', () => {
    cy.get('.card-group .stat-item').each(($stat) => {
      cy.wrap($stat).find('.material-symbols-outlined').should('be.visible');
      cy.wrap($stat).find('.heading').should('be.visible');
      cy.wrap($stat).find('p').should('be.visible');
    });
  });
});
