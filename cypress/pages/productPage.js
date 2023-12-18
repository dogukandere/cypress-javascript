const searchedElement = ".a-color-state.a-text-bold";
const sortByButton = ".a-dropdown-prompt";
    
export class ProductPage {
    verifyProductPageUrl(){
        cy.url().should("include", "iphone")
    }

    checkProductPageTitle(value){
        cy.title().should("eq", value)
    }

    verifySearchedElement(){
        cy.verifyText(searchedElement, "iphone 15")
    }

    verifySortByButton(){
        cy.isDisplayed(sortByButton)
    }
}