describe('context', () => {
    it('cy.visit komutu', () => {
   
        cy.visit('https://www.google.com')
    
    });
    it('cy.pathname', () => {
        cy.visit('/')
        cy.url().should('eq','https://www.google.com/')
    });
    
  
});
