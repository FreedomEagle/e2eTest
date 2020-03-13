// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const EMAIL_FIELD = 'input[type=email]';
const PASSWORD_FIELD = 'input[type=password]';
const SUBMIT = 'button[type=submit]'
const QAWebsite = 'https://share112.com/'
const slideoutButton = '#slideoutButton'
const manageUser = '.btnManageUsers'
const bulkEmail = '#bulk'
const bulkEmailArea = '#emails'
const bulkSubmitBut = 'button[id=submit]'
const userSearch = '#userSearchQuery' 
const buttonSearch = '#btnUserSearch'
const editPerson = '.dropdown-toggle'
const firstName = 'input[id="profile.firstname"]'
const lastName = 'input[id="profile.lastname"]'
const mobile = 'input[id="mobile"]'
const pwSetField = 'input[id="pwContainer"]'


Cypress.Commands.add("inviteUser", (email,pw) =>{
    cy.get(slideoutButton).click({force:true})
    cy.contains('Manage People').click({force:true})
    cy.wait(500)
    cy.contains('Invite New People').click()
    cy.get(bulkEmail).click()
    cy.get(bulkEmailArea).type(email)
    cy.get(bulkSubmitBut).click()
    cy.get(slideoutButton).click({force:true})
    cy.contains('Manage People').click({force:true})
    cy.wait(1000)
    cy.contains('User Directory ').click({force:true})
    cy.get(userSearch).type(email)
    cy.get(buttonSearch).click()
    cy.contains("Set Password").click({force:true})
    cy.get(pwSetField).clear().click().type(pw)
    cy.get(SUBMIT).click({force:true})
})

Cypress.Commands.add("lookFor", (user) =>{
    cy.get(slideoutButton).click({force:true})
    cy.contains('Manage People').click({force:true})
    cy.wait(500)
    cy.contains('User Directory').click({force:true})
    cy.get(userSearch).type(user)
    cy.get(buttonSearch).click()
})