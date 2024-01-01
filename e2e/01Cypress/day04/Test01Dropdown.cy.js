///<reference types="Cypress"/>
describe('DropdownLocate', () => {
    it('Dropdown Menu', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        cy.get('#dropdown').select('Option 1').should('have.value',(1))
        cy.get('#dropdown').select('Option 1').should('have.value',(2))


    });
});