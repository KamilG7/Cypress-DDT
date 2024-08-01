/// <reference types="cypress" />

class MyAccountPage {

get logOutButton () {
    return cy.get("a").contains("Logout")
}

get addressesTab () {
    return cy.get("a").contains("Addresses")
}


}

export default MyAccountPage