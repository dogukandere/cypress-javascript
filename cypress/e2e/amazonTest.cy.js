/// <reference types="cypress" />

import amazon from "../util/amazon"

describe('amazonTest', () => {

    beforeEach(() => {
      cy.visit("https://www.amazon.com.tr/")
    })

    it('verify amazon main page', () => {
      cy.clickThis(amazon.popupAccept)
      cy.isDisplayed(amazon.ordersButton)
    
    })

    /*it('search iphone 15 and verify product page', () => {
      cy.clickThis(amazon.popupAccept)
      cy.typeThis(amazon.searchBox, "iphone 15")
      cy.clickThis(amazon.searchButton)
      cy.clickThis(amazon.firstProductImage)
      cy.url().should("include", "Apple")
      cy.get(amazon.productTitle).should("include", "Apple iPhone 15")
    }) */

    
  })