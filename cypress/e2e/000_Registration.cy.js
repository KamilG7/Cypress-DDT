/// <reference types="cypress" />
const neatCSV = require('neat-csv');

import userData from "../fixtures/userData.json"
import RegistrationPage from "../support/pageObjects/RegistrationPO.cy"
const registrationPage = new RegistrationPage()
import MyAccountPage from "../support/pageObjects/myAccountPO.cy"
const myAccountPage = new MyAccountPage()


   
    describe('Rgistration functionality [S_1001], [S_1002]', () => {
        let dataNOK;
              
        before(() => {
          cy
            .fixture('failedRegistration.csv')
            .then(neatCSV)
            .then(data => {
              dataNOK = data;
        })
            })


        for (let i = 0; i < 4; i++) {                   
            it('Incorrect "Registration Data" should trigger correct error msg. [S_1002], [TC_1002], [TC_1003], [TC_1004], [TC_1005]', () => {
            cy.visit('')
            cy.log(`email: ${dataNOK[i]['email']}`)
            cy.log(`password: ${dataNOK[i]['password']}`)
            registrationPage.navigateTo
            registrationPage.pageLoaded
            if (dataNOK[i]['email'] != "#BLANK") {
                cy.typeAssert(registrationPage.emailInput, dataNOK[i]['email']) }
            if (dataNOK[i]['password'] != "#BLANK") {
                cy.typeAssert(registrationPage.passwordInput, dataNOK[i]['password']) }
            registrationPage.submitButton.click()
            registrationPage.errorLocator.should("include.text", dataNOK[i]['error'])                
                

   })
      }

        it(`Correct registration. [S_1001], [TC_1001]. Email: ${userData.email}, Password: ${userData.password}`, () => {
            cy.visit('')
            registrationPage.navigateTo
            cy.typeAssert(registrationPage.emailInput, userData.email)
            cy.typeAssert(registrationPage.passwordInput, userData.password)
            registrationPage.submitButton.click()
            cy.isDisplayed(myAccountPage.logOutButton)
            myAccountPage.logOutButton.click()
            registrationPage.pageLoaded
      })

           })

        
        
            
