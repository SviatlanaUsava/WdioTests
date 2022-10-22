
class checkoutpagebasket {
    get checkoutBtn() {
        return $("a[id$='cart_checkout1']")
    }
}

module.exports = new checkoutpagebasket()
