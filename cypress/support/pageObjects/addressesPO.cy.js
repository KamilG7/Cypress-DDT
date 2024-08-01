/// <reference types="cypress" />

class Addresses {

    get NavigateTo () {
        return cy.get("a").contains("Addresses").click()
    }
    
    get Alert () {
        return cy.get('[role="alert"]')
    }
    
    }
    
    export default Addresses