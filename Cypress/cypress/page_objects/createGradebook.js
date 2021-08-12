class CreateGradebook {
    get nameGB() {
        return cy.get('.form-control')
    }
    
    get professor() {
        return cy.get('#__BVID__162')
    }
    get submitGradebook() {
        return cy.get('.btn-primary')
    }
    create(nameGB, professor, submitGradebook) {
        this.name.type(nameGB)
        this.professor.type(professor)
        this.submitGradebook.eq(0).click()
    
    }
    
    }
    export const createGradebook = new CreateGradebook