describe('', () => {
    it('', () => {
        cy.visit('https://www.qualitydemy.com') 
         // handle cookie
        cy.get('.cookieButton >a').click()
        cy.get('.btn-sign-in-simple').click()
        //Assertion
        cy.get('.btn-sign-in-simple').should('have.text','Log in')
        // 2 cy.url().should
        cy.get('.btn-sign-in-simple').click()
        cy.url().should('include','login')
        // 3 be.visible
        cy.get('.text-14px').should('be.visible')
        //4 include text
        cy.get('.btn-sign-in-simple').should('include.text','Log')




    });
});