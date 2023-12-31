describe('Test Cypress Komutları', () => {
    it('title komutu', () => {
        cy.visit('https://wisequarter.com/')
        cy.title().should('eq','My courses')
        cy.title().should('include','My')
        cy.should().should('course')
    });

});