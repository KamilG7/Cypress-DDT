/// <reference types="cypress" />

import userData from "../fixtures/userData.json"
import failedLogin from "../fixtures/failedLogin.json"
import RegistrationPage from "../support/pageObjects/RegistrationPO.cy"
const registrationPage = new RegistrationPage()
import MyAccountPage from "../support/pageObjects/myAccountPO.cy"
const myAccountPage = new MyAccountPage()


describe("Login functionality [S_1003], [S_1004]", () => {

    failedLogin.forEach((credentials) => {
        it(`Failed login should trigger correct error msg [S_1004], [TC_1007], [TC_1008], [TC_1009], [TC_1010], [TC_1011], [TC_1012].
             Email: ${credentials.email}, password: ${credentials.password}`, () => {
            cy.visit('')
            registrationPage.navigateTo
            if(failedLogin.email != "#BLANK") {
                cy.typeAssert(registrationPage.loginEmailInput, credentials.email) }
            if(failedLogin.password != "#BLANK") {
                cy.typeAssert(registrationPage.loginPasswordInput, credentials.password) }
            registrationPage.logInButton.click()
            registrationPage.errorLocator.should("include.text", credentials.error)            
        })
      })

      it(`Successfull Login attempt [S_1003], [TC_1006]. Email: ${userData.email}, Password: ${userData.password}`, () => {
        cy.visit('')
        registrationPage.navigateTo
        cy.typeAssert(registrationPage.loginEmailInput, userData.email)
        cy.typeAssert(registrationPage.loginPasswordInput, userData.password)
        registrationPage.logInButton.click()
        cy.isDisplayed(myAccountPage.logOutButton)
        myAccountPage.logOutButton.click()
        registrationPage.pageLoaded
      })
})