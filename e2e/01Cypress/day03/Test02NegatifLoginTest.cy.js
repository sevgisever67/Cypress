/*
TEST-2 Negatif
1-	http://www.automationexercise.com 
2-	Signup/Login sayfasına git
3-	baba71@gmail.com 123456 ile giriş yap
4-	Giriş yapılamadığını doğrula 
*/

describe('Login Testi', () => {
    it('Negatif Login Testi', () => {
     cy.visit('http://www.automationexercise.com')
     cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
     cy.get('[data-qa="login-email"]').type('baba1@gmail.com')
     cy.get('[data-qa="login-password"]').type('123456')
     cy.get('[data-qa="login-button"]').click()
     cy.log('Your email or password is incorrect yazısı kontrol ediyor');
     cy.get('.login-form > form > p').should('include.text','incorrect')
    });

});