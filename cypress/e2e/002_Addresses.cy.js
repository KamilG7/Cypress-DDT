/// <reference types="cypress" />

import userData from "../fixtures/userData.json"
import RegistrationPage from "../support/pageObjects/RegistrationPO.cy"
const registrationPage = new RegistrationPage()
import MyAccountPage from "../support/pageObjects/myAccountPO.cy"
const myAccountPage = new MyAccountPage()
import Addresses from "../support/pageObjects/addressesPO.cy"
const addresses = new Addresses()
import AddressesEdit from "../support/pageObjects/addressesEditPO.cy"
const addressesEdit = new AddressesEdit()
import userAddress from "../fixtures/userAddress.json"

describe("Login functionality [S_1005], [TC_1013]", () => {

    

      it(`User should be able to modify address when logged in [S_1005], [TC_1013]. ${userData.email}, Password: ${userData.password}`, () => {
        cy.visit('')
        registrationPage.navigateTo
        cy.typeAssert(registrationPage.loginEmailInput, userData.email)
        cy.typeAssert(registrationPage.loginPasswordInput, userData.password)
        registrationPage.logInButton.click()
        cy.isDisplayed(myAccountPage.logOutButton)

        addresses.NavigateTo
        addressesEdit.NavigateTo
        cy.typeAssert(addressesEdit.addressesNameInput, userAddress.name)
        cy.typeAssert(addressesEdit.addressesLastNameInput, userAddress.lastName)
        addressesEdit.countrySelect.click()
        cy.get("[role='option']").contains(userAddress.country).click()
        addressesEdit.streetInput.click({force: true})
        cy.typeAssert(addressesEdit.streetInput, userAddress.street)
        cy.typeAssert(addressesEdit.postcodeInput, userAddress.zipcode)
        cy.typeAssert(addressesEdit.cityInput, userAddress.city)
        addressesEdit.saveButton.click()
        addresses.Alert.should("include.text", userAddress.alert)
        myAccountPage.logOutButton.click()
        registrationPage.pageLoaded
      })
})