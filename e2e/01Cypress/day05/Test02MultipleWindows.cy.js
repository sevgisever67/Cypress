///<reference types="Cypress" />
describe('Multiple Windoes', () => {
    it('Attribute Remove', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.get('h3').should('have.text','New Window')
    });

    it.only('Attribute Remove', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((element) => {
            const newUrl = element.prop('href')
            cy.visit(newUrl)
        })


    });

});