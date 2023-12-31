describe('Context Kullanimi', () => {
    it('google ziyaret', () => {
        cy.visit('http://www.google.com')
        cy.title().should('include','Google')
    });
});