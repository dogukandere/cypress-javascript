import { MainPage } from "../pages/mainPage"
import { ProductPage } from "../pages/productPage";

const mainPage = new MainPage();
const productPage = new ProductPage();

describe("Amazon test", () => {
  beforeEach(() => {
    mainPage.visitMainUrl()
    mainPage.verifyUrl("https://www.amazon.com.tr/")
    mainPage.verifyProtocolAndHostName()
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
    productPage.checkProductPageTitle("Amazon.com.tr : iphone 15")
    productPage.verifySearchedElement()
    productPage.verifySortByButton()
  })
})
    