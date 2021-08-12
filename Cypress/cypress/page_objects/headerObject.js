class Header {
    get loginButton(){
        return cy.get(":nth-child(1) > :nth-child(1) > .nav-link")
    }
    get registerButton(){
        return cy.get(":nth-child(1) > :nth-child(1) > .nav-link")
    }
    get logoutButton(){
        return cy.get("a[role='button ']")
    }
    get createProfessor(){
        return cy.get(":nth-child(6) > .nav-link")
    }
    logout(){
        this.logoutButton.click()
    }
    loginclick(){
        this.loginButton.click()
    }

    createProfessorClick() {
        this.createProfessor.click()
    }
    createGradebookClick() {
        this.createGradebook.click()
    }
}
export const header = new Header()