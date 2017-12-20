import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import Callout from '../components/Callout';
import { doFetchCallouts } from '../actions/doFetchCallouts';

class Callouts extends Component {

	componentDidMount() {
	  this.props.fetchCallouts()
	}

	render() {

		console.log('@inside containers callouts ----->', this.props)
		const callouts = this.props.callouts

		if(!callouts.length) {
			return null
		}

		const calloutsList = callouts.map((callout, i) => {
			return <Callout key={i} {...callouts} />
		})

		return(
			<section className="content">
				<div className="row">
				{calloutsList}
				</div>
			</section>
		);
	}
}
	const mapStateToProps = state => {
	  return {
	    callouts: state.homeReducer.applyFetchCallouts.callouts,
	    isLoading: state.homeReducer.applyFetchCallouts.isLoading,
	  }
	}

	const mapDispatchToProps = (dispatch, ownProps) => {
	  return {
	    fetchCallouts: () => {
	      dispatch(doFetchCallouts())
	    }
	  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callouts);