const popupAccept = "#sp-cc-accept";
const amazonLogo = "#nav-logo-sprites";
const ordersButton = "#nav-orders > span.nav-line-1";
const loginButton = "#nav-link-accountList-nav-line-1";
const searchBox = "#twotabsearchtextbox";
const searchButton = "#nav-search-submit-button";

export class MainPage {
    visitMainUrl(){
        cy.visit("https://www.amazon.com.tr/")
    }

    clickPopupAcceptButton(){
        cy.clickThis(popupAccept)
    }

    verifyAmazonLogo(){
        cy.isDisplayed(amazonLogo)
    }

    verifyOrdersButton(){
        cy.isDisplayed(ordersButton)
    }

    verifyLoginButton(){
        cy.isDisplayed(loginButton)
    }

    typeProductName(value){
        cy.typeThis(searchBox, value)
    }

    clickSearchButton(){
        cy.clickThis(searchButton)
    }
}