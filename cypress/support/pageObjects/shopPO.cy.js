/// <reference types="cypress" />

class Shop {

    get NavigateTo () {
        return cy.get("span").contains("Shop").click()
    }
    
    get Products() {
        return cy.get("[class='products columns-4']")
    }
    
    }
    
    export default Shop