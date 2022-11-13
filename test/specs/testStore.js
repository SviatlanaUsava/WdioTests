const listProdPage = require('../pageObjects/listProdPage')
const checkoutpagebasket = require('../pageObjects/checkoutpagebasket')
const checkoutPage = require('../pageObjects/checkoutPage')
const userAccountCr = require('../pageObjects/userAccountCr')
const userPickTypeAutho = require('../pageObjects/userPickTypeAutho')

describe('purchase order', () => {
    it('verfy that target page is opened', async () => {

        await browser.url('https://automationteststore.com/');
        await expect(listProdPage.featured).toHaveTextContaining('FEATURED');
        console.log("target page is opened");
    })
    it('add items to basket', async () => {
        await listProdPage.creamAddToBasket.click();
        console.log("cream added");
        await listProdPage.powderAddToBasket.click();
        console.log("powder added");
        await listProdPage.basket.click();
        await browser.pause(2000);
    })// checkout page basket
    it('checkout', async () => {//basket
        await expect(checkoutpagebasket.checkoutBtn).toHaveTextContaining('Checkout');
        await checkoutpagebasket.checkoutBtn.click();
        console.log("checkout clicked");
        await browser.pause(3000);
    })//user autorisation page
    it('User autorisation', async () => {
        await userPickTypeAutho.radioBtn.click();//radio butn marked
        console.log("Continue btn clicked");
        await browser.pause(3000);
    })//new user registration
    it('Regestration of the guest user', async () => {
        await userAccountCr.firstName.setValue('Sally'); https://automationteststore.com/index.php?rt=account/create
        await browser.pause(2500);
        await userAccountCr.lastName.setValue("Sparrow");
        await userAccountCr.email.setValue('l56u897433@gmail.com');
        console.log(await userAccountCr.email.getValue());
        await userAccountCr.tel.setValue("00000000");
        await userAccountCr.company.setValue("new");
        await userAccountCr.adr.setValue("myadress");
        await userAccountCr.city.setValue("Warsaw");
        await browser.pause(3000);
        await userAccountCr.country.selectByVisibleText('Poland');
        //dropdown select element
        await browser.pause(3000);
        await userAccountCr.region.selectByVisibleText('Lodzkie');
        await browser.pause(3000);
        await userAccountCr.zip.setValue("6789");
        await userAccountCr.loginName.setValue("SamueltyGamgy");
        await userAccountCr.password.setValue("tytijmn5");
        await userAccountCr.paswConfirm.setValue("tytijmn5");
        await userAccountCr.checkBtn.click();
        await userAccountCr.userArgeement.click();
        await userAccountCr.btnContinue.click();
        await browser.pause(3000);
        //checkout page
        await expect(checkoutPage.verifText).toHaveText('CHECKOUT CONFIRMATION');

        //console.log(await verifText.getText())
    })
})


// const stableText = $("div[id='block_frame_featured_1769'] span[class='maintext']");
// it('refresh the page till element appeares', async () => {
//     await browser.url("https://automationteststore.com/")
//         for (let i = 0; i < 10; i++){
//             if (await $(featured).isExisting()){
//                 console.log('first stable table element has appeared')
//                 break

//      } else {
//         await browser.refresh()
//         await browser.pause(2000)
//         console.log("element not found");
//     }
// }})
