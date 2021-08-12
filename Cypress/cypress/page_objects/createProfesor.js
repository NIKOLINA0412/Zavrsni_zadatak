class CreateProfessor {
get name() {
    return cy.get('#input-default')
}
get lastName() {
    return cy.get('#input-default1')
}
get imageUrl() {
return cy.get("#__BVID__166")
}
get submitProfessor() {
    return cy.get('#__BVID__162')
}
get submitProfessor() {
    return cy.get('.btn-secondary')
}
create(name, lastName, imageUrl) {
    this.name.type(name)
    this.lastName.type(lastName)
    this.imageUrl.type(imageUrl)
    this.submitProfessor.eq(0).click()

}

}
export const createProfesor = new CreateProfessor