describe('locate Alma', () => {
    it('cy.get komutu', () => {
        cypress.visit('/')
        cy.get('#APjFqb').type('cypress{enter}')
        cy.get('#gb_d').click
        cy.get('div#hdtb-msb div:nth-child(2) > a'.click)
    });
    
});