
//import Page from 'test/pageObjects/lockatorsTestStore.js'

describe('purchase order', () => {
    it('verfy that target page is opened', async () => {

        await browser.url('https://automationteststore.com/');
        const featured = $("div[id='block_frame_featured_1769'] span[class='maintext']");
        await expect(featured).toHaveTextContaining('FEATURED');
        console.log("target page is opened");
    })
    it('add items to basket', async () => {
        const creamAddToBasket = $("//section[@id='latest']//div[3]//div[2]//div[3]//a[1]//i[1]");
        await creamAddToBasket.click();
        console.log("cream added");

        const powderAddToBasket = $("//section[@id='featured']//div[3]//div[2]//div[3]//a[1]//i[1]")
        await powderAddToBasket.click();
        console.log("powder added");
        const basket = $("ul[class='nav topcart pull-left'] a[class='dropdown-toggle']");
        await basket.click();
        await browser.pause(2000);
    })// checkout page basket
    it('checkout', async () => {//basket
        const checkoutBtn = $("a[id$='cart_checkout1']");
        await expect(checkoutBtn).toHaveTextContaining('Checkout');
        await checkoutBtn.click();
        console.log("checkout clicked");
        await browser.pause(3000);
    })//user autorisation page
    it('User autorisation', async () => {
        const radioBtn = $("button[title='Continue']");
        await radioBtn.click();//radio butn marked
        console.log("Comtinue btn clicked");
        await browser.pause(3000);
    })//new user registration
    it('Regestration of the guest user', async () => {
        const firstName = $("#AccountFrm_firstname");
        await firstName.setValue('Sally'); https://automationteststore.com/index.php?rt=account/create
        await browser.pause(2500);
        const lastName = $("#AccountFrm_lastname");
        await lastName.setValue("Sparrow");
        const email = $("#AccountFrm_email");
        await email.setValue('lulu3433@gmail.com');
        console.log(await email.getValue());
        const tel = $("#AccountFrm_telephone");
        await tel.setValue("00000000");
        const company = $("#AccountFrm_company");
        await company.setValue("new");
        const adr = $("#AccountFrm_address_1");
        adr.setValue("myadress");
        const city = $("#AccountFrm_city");
        city.setValue("Warsaw");
        const country = $("#AccountFrm_country_id");
        await country.selectByVisibleText('Poland');
        //dropdown select element
        const region = $("#AccountFrm_zone_id");
        await browser.pause(3000);
        await region.selectByVisibleText('Lodzkie');
        await browser.pause(3000);
        const zip = $("#AccountFrm_postcode");
        await zip.setValue("6789");
        const loginName = $("#AccountFrm_loginname");
        await loginName.setValue("Sally3334");
        const password = $("#AccountFrm_password");
        await password.setValue("tytijmn5");
        const paswConfirm = $("#AccountFrm_confirm");
        await paswConfirm.setValue("tytijmn5");
        const checkBtn = $("label[for='AccountFrm_newsletter0']");
        await checkBtn.click();
        const userArgeement = $("#AccountFrm_agree");
        await userArgeement.click();
        const btnContinue = $("button[title='Continue']");
        await btnContinue.click();
        await browser.pause(3000);
        //checkout page
        const verifText = $(".maintext");
        await expect(verifText).toHaveText('CHECKOUT CONFIRMATION');

        console.log(await verifText.getText())
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