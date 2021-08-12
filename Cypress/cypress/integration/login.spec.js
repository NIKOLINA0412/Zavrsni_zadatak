describe("Login", () => {
    it('Visit', () => {
        cy.visit('/')
        cy.url().should('contains', 'gradebook')
    })
    it('Click on login button', () => {
        cy.visit('/')
        cy.url().should('contains', 'gradebook')
        cy.get('.nav-link').eq(1).should('be.visible').click()
    })
    it('Login with valid data', () => {
        cy.visit ('/')
        cy.get(':nth-child(1) > .nav-link').should('be.visible').click()
        cy.url().should('contains', 'login')
        cy.get('h4').should('have.text', 'Please Login.')
        cy.get('#email').type('nikolina123@test.com')
        cy.get('#userPassword').type('nikolina123')
        cy.get('.btn')
            .should('be.visible')
                .and('have.css', 'border-color', 'rgb(0, 123, 255)')
                .and('have.css', 'color', 'rgb(0, 123, 255)').click()
    })
})