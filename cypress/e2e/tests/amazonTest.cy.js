/// <reference types="cypress" />

describe('amazonTest', () => {

    beforeEach(() => {
      cy.visit("https://www.amazon.com.tr/")
    })

    it('search product and click product', () => {
      cy.get("#sp-cc-accept").click()
      cy.get("#twotabsearchtextbox").type('s23')
      cy.get("#nav-search-submit-button").click()

      cy.get("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_2'] span[class='a-size-base-plus a-color-base a-text-normal']").click()
      cy.url().should("include", "Samsung")
      cy.get("body > div:nth-child(5) > div:nth-child(71) > div:nth-child(9) > div:nth-child(7) > div:nth-child(4) > div:nth-child(4) > div:nth-child(2) > span:nth-child(3) > a:nth-child(1) > span:nth-child(1)").click()
      cy.wait(4000)
    })
  })