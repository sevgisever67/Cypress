describe('CustomCommands', () => {
    it.skip('Pozitif Login Testi 1', () => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.btn-sign-in-simple').click()
        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b')
    });
    it('Komutlu Login Testi', () => {
        cy.qlogin('mb@babayigit.net','M123456.b')
    });

    it.only('Komutla negatif login testi', () => {
        cy.qlogin('mb@babayigit.net','M123456{enter}')
        
    });


});