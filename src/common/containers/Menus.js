import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenuComponent from '../components/MenuComponent'
import { Link } from 'react-router-dom'

import { doFetchMenus } from '../actions/doFetchMenus'

class Menus extends Component {

	componentDidMount() {
		this.props.fetchMenus()
	}

	render() {

		console.log('@props inside container =>', this.props)
		
		const menus = this.props.menus
		
		console.log('@menus inside container =>', menus)

		if(!menus.length){
			return null
		}

		const menuList = menus.map((menu, i) => {
			return(
				<MenuComponent key={i} menu={menu} />
				)
		})

		return(
			<div className="menu-wrap">
				<nav>
					<div className="container text-center main-menu">
						{menuList}
					</div>
				</nav>
			</div>

		);

	}
}


const mapStateToProps = state => {
  return {
    menus: state.commonReducer.applyFetchMenus.menus,
    isLoading: state.commonReducer.applyFetchMenus.isLoading,
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMenus: () => {
      dispatch(doFetchMenus())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menus);

