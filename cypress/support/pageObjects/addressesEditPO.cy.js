/// <reference types="cypress" />

class AddressesEdit {

    get NavigateTo () {
        return cy.contains("Shipping address").siblings("a").click()
    }

    get addressesNameInput () {
        return cy.get('[id="shipping_first_name"]')
    }

    get addressesLastNameInput () {
        return cy.get('[id="shipping_last_name"]')
    }

    get countrySelect() {
        return cy.get('[id="select2-shipping_country-container"]')
    }

    get streetInput() {
        return cy.get('[id="shipping_address_1"]')
    }
    
    get postcodeInput() {
        return cy.get('[id="shipping_postcode"]')
    }

    get cityInput() {
        return cy.get('[id="shipping_city"]')
    }
    
    get saveButton() {
        return cy.get('button').contains('Save address')
    }

    }
    
    export default AddressesEdit