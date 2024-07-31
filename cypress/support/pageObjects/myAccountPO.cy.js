/// <reference types="cypress" />

class MyAccountPage {

get logOutButton () {
    return cy.get("a").contains("Logout")
}


}

export default MyAccountPage