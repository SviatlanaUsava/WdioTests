class userAccountCr {

    get firstName() {
        return $("#AccountFrm_firstname")
    }

    get lastName() {
        return $("#AccountFrm_lastname")
    }

    get email() {
        return $("#AccountFrm_email")
    }

    get tel() {
        return $("#AccountFrm_telephone")
    }

    get company() {
        return $("#AccountFrm_company")
    }

    get adr() {
        return $("#AccountFrm_address_1")
    }

    get city() {
        return $("#AccountFrm_city")
    }

    get country() {
        return $("#AccountFrm_country_id")
    }

    get region() {
        return $("#AccountFrm_zone_id")
    }
    get zip() {
        return $("#AccountFrm_postcode")
    }

    get loginName() {
        return $("#AccountFrm_loginname")
    }

    get password() {
        return $("#AccountFrm_password")
    }
    get paswConfirm() {
        return $("#AccountFrm_confirm")
    }

    get checkBtn() {
        return $("label[for='AccountFrm_newsletter0']")
    }

    get userArgeement() {
        return $("#AccountFrm_agree")
    }

    get btnContinue() {
        return $("button[title='Continue']")
    }


}


module.exports = new userAccountCr()
