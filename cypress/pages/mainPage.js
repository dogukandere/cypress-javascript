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

    verifyProtocolAndHostName(){
        cy.location("protocol").should("eq",'https:')
        cy.location("hostname").should("eq", "www.amazon.com.tr")
    }

    verifyUrl(url){
        cy.url().should("equal", url)
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

    typeProductName(productName){
        cy.typeThis(searchBox, productName)
        cy.wait(1000)
    }

    clickSearchButton(){
        cy.clickThis(searchButton)
    }
}