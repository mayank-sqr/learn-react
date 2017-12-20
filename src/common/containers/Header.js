import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import ReactImageFallback from "react-image-fallback"

class Header extends Component {

	render() {

		console.log('@This Props =>', this.props)

		let { showcaseInfo } = this.props;

		console.log('@Header Props =>', showcaseInfo)

		if(_.isEmpty(showcaseInfo)) {
			return null
		}
		
		console.log('@window Location =>', window.location.origin)

		// below logo url is comming from public/images folder 
		let defaultLogo = `${process.env.PUBLIC_URL}/images/website_logo.png`
		// below logo url is comming from backend
		let logoUrl = `${window.location.origin}/optportal/logo/${showcaseInfo.optId}/${showcaseInfo.company.logo}`

		return(
			<header>
				<h1 className="logo text-center">
					<Link to="/">
						<ReactImageFallback
						  src={logoUrl}
						  fallbackImage={defaultLogo}
						/>
					</Link>
				</h1>
			</header>
			)
	}
}


// Really Need to study how mapStateToProps sets
const mapStateToProps = state => {
	return {
		showcaseInfo: state.commonReducer.showcaseInfo
	}
}

// What is connect?
export default connect(
	mapStateToProps
)(Header);