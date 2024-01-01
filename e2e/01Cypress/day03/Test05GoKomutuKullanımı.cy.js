describe('go komutu kullanımı', () => {
    it('', () => {
        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type('fizikçi{enter}')
        cy.go('back')
        cy.go('forward')
        cy.reload()
        cy.wait(3000)
        cy.go(-1)
        cy.go(1)
     
});
});