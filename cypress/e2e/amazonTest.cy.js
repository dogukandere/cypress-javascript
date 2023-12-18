/// <reference types="cypress" />

import { MainPage } from "../pages/mainPage"
import { ProductPage } from "../pages/productPage";

const mainPage = new MainPage();
const productPage = new ProductPage();

describe("Amazon test", () => {
  beforeEach(() => {
    mainPage.visitMainUrl()
    mainPage.clickPopupAcceptButton()
  })

  it('verify amazon main page', () => {
    mainPage.verifyAmazonLogo()
    mainPage.verifyOrdersButton()
    mainPage.verifyLoginButton()
  })

  it('search iphone 15 and verify product page', () => {
    mainPage.typeProductName("iphone 15")
    mainPage.clickSearchButton()
    productPage.verifyProductPageUrl()
    productPage.verifySearchedElement()
  })
})
    