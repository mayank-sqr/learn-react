import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ReactImageFallback from "react-image-fallback";

class Callout extends Component {

	render() {


		console.log('@callouts inside Component =>', this.props)

		// below variables are API variables
		let {
			anchorLink,
  		desktop_image,
  		imagcolumnoffset,
  		imagecolumn,
  		mobile_image			
		} = this.props
		
		const defaultErrorImage =  process.env.PUBLIC_URL + '/images/404.jpg';

		let calloutClasses = classNames({
			callouts: true,
			[`col-sm-offset-${imagcolumnoffset}`]: true,
			[`col-sm-${imagecolumn}`]: true,
			[`padding-${imagcolumnoffset}`]: true,
			[`column-${imagecolumn}{imagcolumnoffset}`]: true
		})

		if(anchorLink && anchorLink.indexOf('http') >= 0) {
			return(
				<div className={calloutClasses}>
				  <div className="grid-img">
				  <a href={anchorLink}>
				    <ReactImageFallback
				      src={desktop_image}
				      fallbackImage={defaultErrorImage}
				      className="img-responsive hidden-xs"
				    />
				    <ReactImageFallback
				      src={mobile_image}
				      fallbackImage={defaultErrorImage}
				      className="img-responsive hidden-sm hidden-md hidden-lg"
				    />
				  </a>
				  </div>
				</div>
				);
		}

		return (
		  <div className={calloutClasses}>
		    <div className="grid-img">
		  	<Link to={anchorLink}>
		      <ReactImageFallback
		        src={desktop_image}
		        fallbackImage={defaultErrorImage}
		        className="img-responsive hidden-xs"
		      />
		      <ReactImageFallback
		        src={mobile_image}
		        fallbackImage={defaultErrorImage}
		        className="img-responsive hidden-sm hidden-md hidden-lg"
		      />
		  	</Link>
		    </div>
		  </div>
		);
	}
}

export default Callout;