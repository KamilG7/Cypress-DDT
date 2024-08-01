/// <reference types="cypress" />

import userData from "../fixtures/userData.json"
import RegistrationPage from "../support/pageObjects/RegistrationPO.cy"
const registrationPage = new RegistrationPage()
import MyAccountPage from "../support/pageObjects/myAccountPO.cy"
const myAccountPage = new MyAccountPage()
import Shop from "../support/pageObjects/shopPO.cy"
const shop = new Shop()



describe("Shop functionality [S_1006], [S_1014]", () => {

    

      it(`User should be able to browse products when Logged In [S_1006], [S_1014]. Email: ${userData.email}, Password: ${userData.password}`, () => {
        cy.visit('')
        registrationPage.navigateTo
        cy.typeAssert(registrationPage.loginEmailInput, userData.email)
        cy.typeAssert(registrationPage.loginPasswordInput, userData.password)
        registrationPage.logInButton.click()
        cy.isDisplayed(myAccountPage.logOutButton)
        shop.NavigateTo
        shop.Products.children().should("be.visible")
        shop.Products.children().should('not.have.length', 0)
      })
})