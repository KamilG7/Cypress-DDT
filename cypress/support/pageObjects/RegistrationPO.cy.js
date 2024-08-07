/// <reference types="cypress" />

class RegistrationPage {

    get pageLoaded() {
        return cy.isDisplayed(cy.get("h1").contains("My account"))
    }

    get navigateTo() {
        return cy.get('span').contains('My account').click()
    }

    get emailInput() {
        return cy.get("#reg_email")
    }

    get passwordInput() {
        return cy.get("#reg_password")
    }

    get submitButton() {
        return cy.get("button[name='register']")
    }

    get errorLocator() {
        return cy.get("ul[role='alert']>li")
    }

    get loginEmailInput () {
        return cy.get("[id='username']")
    }

    get loginPasswordInput () {
        return cy.get("#password")
    }

    get logInButton () {
        return cy.get("button").contains("Log in")
    }

    get logInError () {
        return cy.get()
    }



}

export default RegistrationPage