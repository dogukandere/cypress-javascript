Cypress.Commands.add('clickThis', (element1) => {
    return cy.get(element1).click()
  })

Cypress.Commands.add('typeThis', (element1, value) => {
    return cy.get(element1).clear().type(value)
  })

Cypress.Commands.add('isDisplayed', (element1) => {
    return cy.get(element1).scrollIntoView().should("be.visible")
  })

Cypress.Commands.add('verifyText', (element1, text) => {
  return cy.get(element1).scrollIntoView().should("have.text", text)
  })  