const searchedElement = ".a-color-state.a-text-bold";
    
export class ProductPage {
    verifyProductPageUrl(){
        cy.url().should("include", "iphone")
    }

    verifySearchedElement(){
        cy.verifyText(searchedElement, "iphone 15")
    }
}