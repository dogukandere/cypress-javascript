/// <reference types="cypress" />

import amazon from "../util/amazon"

describe('amazonTest', () => {

    beforeEach(() => {
      cy.visit("https://www.amazon.com.tr/")
    })

    it('search iphone 15 and click on the product', () => {
      cy.get(amazon.popupAccept).click()
      cy.get(amazon.searchBox).type('iphone 15')
      cy.get(amazon.searchButton).click()

      cy.get(amazon.firstProductImage).click()
      cy.url().should("include", "Apple")
      cy.wait(2000)
      cy.get(amazon.productTitle).should("include", "Apple iPhone 15")
    })
  })