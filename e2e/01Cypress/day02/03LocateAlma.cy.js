describe('Locate alma', () => {
    it('cy.get komutu', () => {
        cy.visit('http://www.google.com')
        cy.get('#APjFqb').type('cypress{enter}')
    });
});