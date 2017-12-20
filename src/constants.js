//Global variables
import _ from 'lodash';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// Standaone URL-
// retailerlogin:ooak.optshowcase.com
// Integrated within OPT-
// Showcase tag will be added to URL as - www.optcentral.com/optportal/ooak/showcase.html
// Retailer details will be picked up from the session
let PATHNAME = window.location.pathname.split('/');
PATHNAME = _.compact(PATHNAME)

let getShowcase = () => {
	// Current showcase
	if(PATHNAME.length > 2){
		let showcase = PATHNAME[2]
		return _.replace(showcase, '.html', '')
	}
	return 'OOO'
}

let getLogin = () => {
	if (window.opt) {
		return window.opt.session.user.login
	}
	return 'cdpeacockcorp_SUPER'
}

let getSessionId = () => {
	if (window.opt) {
		return cookies.get('JSESSIONID');
	}
	return null;
}

let getRetailerId = () => {
	if (window.opt) {
		return window.opt.session.user.company.id
	}
	return 2407
}

let getUser = () => {
	if (window.opt) {
		return window.opt.session.user
	}
	return {
	    "login": "cdpeacockcorp_SUPER",
	    "email": "vasi@optcentral.com",
	    "companyName": "Harry Kotlar",
	    "companyId": "2407",
	    "companyType": "2",
	    "referBrand": "true",
	    "userFirstName": "OPT",
	    "userLastName": "System Administrator",
	    "primaryResponsibility": "OPT Product Manager",
	    "id": "522",
	    "can_add_all_to_basket": true,
	    "roles": [
	      "ROLE_BRAND_FEEDBACK",
	      "ROLE_EMAIL",
	      "ROLE_PRINT",
	      "ROLE_RETAILSTYLE",
	      "ROLE_SOCIAL_SHARE",
	      "ROLE_BRAND_ORDER_REP",
	      "ROLE_REQUEST_INFO_FULL_ACCESS",
	      "ROLE_REQUEST_VIEWING_FULL_ACCESS",
	      "BRAND_LDS_ACCESS"
	    ],
	    "company": {
	      "premiumMessage": "no",
	      "basket": "yes",
	      "type": "2",
	      "url": "http://www.harrykotlar.com",
	      "logo": "logo_bnd_129.gif",
	      "smsFlag": "false",
	      "id": "2407",
	      "retIntegration": ""
	    }
	  };
}

let getEmailSuggestions = () => {
	if (window.opt) {
		return window.opt.session.autofillusers || []
	}
	return []
}

let getOptSession = () => {
	if (window.opt) {
		return window.opt.session
	}
	return {
	  "autofillusers": "",
	  "allowBIG": true,
	  "basketItems": "",
	  "user": {
	    "login": "hkot_SUPER",
	    "email": "vasi@optcentral.com",
	    "companyName": "Harry Kotlar",
	    "companyId": "129",
	    "companyType": "2",
	    "referBrand": "true",
	    "userFirstName": "OPT",
	    "userLastName": "System Administrator",
	    "primaryResponsibility": "OPT Product Manager",
	    "id": "522",
	    "can_add_all_to_basket": true,
	    "roles": [
	      "ROLE_BRAND_FEEDBACK",
	      "ROLE_EMAIL",
	      "ROLE_PRINT",
	      "ROLE_RETAILSTYLE",
	      "ROLE_SOCIAL_SHARE",
	      "ROLE_BRAND_ORDER_REP",
	      "ROLE_REQUEST_INFO_FULL_ACCESS",
	      "ROLE_REQUEST_VIEWING_FULL_ACCESS",
	      "BRAND_LDS_ACCESS"
	    ],
	    "company": {
	      "premiumMessage": "no",
	      "basket": "yes",
	      "type": "2",
	      "url": "http://www.harrykotlar.com",
	      "logo": "logo_bnd_129.gif",
	      "smsFlag": "false",
	      "id": "129",
	      "retIntegration": ""
	    }
	  },
	  "brand": {
	    "id": "129",
	    "name": "OPT",
	    "logo": "logo_opt.gif",
	    "catalogMultiselect": "true",
	    "price": {
	      "step": "1000",
	      "max": "50000"
	    }
	  },
	  "facebook": {
	    "id": "",
	    "name": ""
	  },
	  "purpose": "POS",
	  "iPad": "false",
	  "iPhone": "false",
	  "isIE9": false,
	  "NewOrderFlow": "&oldOrder=false",
	  "ldsCompany": null
	};

}

export const defaultErrorImage =  process.env.PUBLIC_URL + '/images/404.jpg'



export const LOGIN = getLogin()
export const RETAILER_ID = getRetailerId()
export const SHOWCASE = getShowcase()
export const USER = getUser()
export const EMAIL_SUGGESTIONS = getEmailSuggestions()

export const SESSION = getOptSession()
export const JSESSIONID = getSessionId();

// Showcase sever API root url
// export const SHOWCASE_API = 'http://opt-showcase-api-staging.jelastic.optcentral.com';
export const SHOWCASE_API = process.env.REACT_APP_SHOWCASE_SERVER;
// OPT sever API root url
export const OPT_API = process.env.REACT_APP_OPT_SERVER
