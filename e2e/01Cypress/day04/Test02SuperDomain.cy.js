///<reference types="Cypress"/>
describe('Aynı Classda 2 farklı visit', () => {
    it('Aynı Classda farklı 2 addres', () => {
        cy.visit('https://amazon.com')
        cy.visit('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb') 
    });
    it('farklı adress', () => {
        cy.visit('https://www.google.com')
    });
});