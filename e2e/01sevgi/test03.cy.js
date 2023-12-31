describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com')

    });
    it('title', () => {
        cy.title().should('eq','Google')
        cy.title().should('include','google')
    });
    it('locate alma', () => {
        cy.visit('/')
        cy.get('#APjFqb').type('cypress{enter}')
    
    });
    
});