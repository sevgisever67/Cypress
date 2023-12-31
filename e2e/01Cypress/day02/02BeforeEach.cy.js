describe('', () => {
    /*beforeEach(() => {
        cy.visit('https://www.google.com')  // her it bloğundan önce çalışır
    });*/
    it('', (title) => {
        cy.title().should('eq','Google')
        cy.title().should('include','Goo')
    });

    it('url', () => {
        cy.url().should(include,'google')
    });
});