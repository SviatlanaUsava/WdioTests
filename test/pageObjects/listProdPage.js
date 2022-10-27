


class listProdPage {

    get featured() {
        return $("div[id='block_frame_featured_1769'] span[class='maintext']")
    }

    get creamAddToBasket() {
        return $("//section[@id='latest']//div[3]//div[2]//div[3]//a[1]//i[1]")
    }

    get powderAddToBasket() {
        return $("//section[@id='featured']//div[3]//div[2]//div[3]//a[1]//i[1]")
    }

    get basket() {
        return $("ul[class='nav topcart pull-left'] a[class='dropdown-toggle']")

    }

    async pageRefreshTillSelectorFound() {//not working
        for (let i = 0; i < 10; i++) {
            if (await $(featured).isExisting()) {
                console.log('first stable table element has appeared')
                break

            } else {
                await browser.refresh()
                await browser.pause(2000)
                console.log("element not found");
            }
        }
    }


}

module.exports = new listProdPage()

