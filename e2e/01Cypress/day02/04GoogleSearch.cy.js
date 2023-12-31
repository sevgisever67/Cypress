describe('', () => {
    beforeEach(() => {
        cy.visit('https://wwwgoogle.com')
    });
    it('google da 3 idiot arat', () => {
        cy.get('#APjFqb').type('3 idiots{enter}')
       
    });
    it.only('google da er ryan kurtarmak araması', () => {
        cy.get('#APjFqb').type('Er ryan kurtarmak{enter}')
    });
});