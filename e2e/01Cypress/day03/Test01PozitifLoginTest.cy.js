describe('Login Test', () => {
    it('Pozitif Login Test', () => {
        /*    
TEST  – 1 Pozitif
1-	http://www.automationexercise.com adresine git
2-	Signup/Login sayfasına git
3-	“Login to your account” yazısının bulunduğunu doğrula
4-	“New User Signup!” yazısının varlığını doğrula
5-	babayigit@gmail.com 123456 ile giriş yap
6-	Giriş yaptığını doğrula
7-	Çıkış yap
8-	Çıkış yapıldığını doğrula
       */
//1-	http://www.automationexercise.com adresine git
cy.visit('http://www.automationexercise.com')

//2-	Signup/Login sayfasına git
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
//3-	“Login to your account” yazısının bulunduğunu doğrula
cy.get('.login-form > h2').should('be.visible')
//4-	“New User Signup!” yazısının varlığını doğrula
cy.get('.signup-form > h2').should('have.text','New User Signup!')
//5-	babayigit@gmail.com 123456 ile giriş yap
cy.get('[data-qa="login-email"]').type('babayigit@gmail.com')
cy.get('[data-qa="login-password"]').type('123456')
cy.get('[data-qa="login-button"]').click()
//6-	Giriş yaptığını doğrula
cy.get(':nth-child(10) > a').should('include.text','Logged')
//7-	Çıkış yap
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
//8-	Çıkış yapıldığını doğrula
cy.get('.login-form > h2').should('be.visible')

    });
});
