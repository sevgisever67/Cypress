describe.only('Cypress Temel Komutlar', () => {
    it('cy.visit komutu.1', () => {
        cy.visit('/')
        cy.visit('https://www.google.com')  // base url tanımlı değilse
    });

it('cy.visit komutu.2', () => {
    cy.visit('/about-us')
});


it ('cy.title komutu', () => {
  //  cy.visit('/')    // base url adrese gider
    cy.visit('http://www.wisequarter.com') 
  //  cy.title().should('eq','IT Bootcamp Courses, Online Classes - Wise Quarter Course') 
    cy.title().should('contains','Deliver')
   // cy.title().should('include','Deliver')
   cy.location('pathname','/about-us')
});

});