describe('Login Testi', () => {
    it('', () => {
        cy.visit('https://www.qualitydemy.com')

        // handle cookie
        cy.get('.cookieButton >a').click()
        cy.get('.btn-sign-in-simple').click()
        // 2.ci yol--> Log in yazısını bul tıkla
        cy.contains('log in').click()
        //3. Yol
        // cy.contains('log in', {matchCase:false}).click()
        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b')
        cy.get('form#sign_up button[type="submit"]').click()
    });
});