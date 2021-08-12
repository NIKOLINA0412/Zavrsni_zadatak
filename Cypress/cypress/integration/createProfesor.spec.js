/// <reference types="Cypress" />

import {authLogin} from '../page_objects/loginObject'
import {createProfesor, CreateProfessor} from'../page_objects/createProfesor'
import {header} from '../page_objects/headerObject'
const Locators = require('../fixtures/Locators.json');


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
    it('Kreiranje profesora', ()=> {
        cy.intercept(
            'POST',
            'https://gradebook-api.vivifyideas.com/api/professors/create'
        ).as('createdprofesor')
      
       
        authLogin.login('nikolina123@test.com', 'nikolina123')
        header.createProfessorClick()
        createProfesor.create('random21', 'random14', 'https://tinypng.com/images/social/website.jpg')
        cy.wait('@createdprofesor').then((interception) => {
            expect(interception.response.statusCode).to.eq(201)
            expect(interception.response.body).to.be.a('Object')
            console.log('created profesor', interception)
            gradebok_id = interception.response.body.id
            cy.log(profesorId)
        
        })
        })
    
})