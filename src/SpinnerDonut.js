import React from 'react';

module.exports = {
	// Module constants (change according to your flavor file)
	const SPINNER_DONUT_CLASS_NAME = 'spinner-donut';
	// Donut Spinner component.
	class SpinnerDonut extends React.Component {
		// It's possible to use either a <span> or a <div> element (default).
		render () {
			if (this.props.children !== undefined && this.props.children !== 'undefined'){
				throw "A 'SpinnerDonut' component should not have any children.";
				return;
			}
			var spinnerDonutProps = Object.assign({}, this.props);
			if (typeof spinnerDonutProps.className === 'undefined')
				spinnerDonutProps.className =  SPINNER_DONUT_CLASS_NAME;
			else
				spinnerDonutProps.className += ' ' + SPINNER_DONUT_CLASS_NAME;
			if (spinnerDonutProps.progressBar)
				spinnerDonutProps.role = 'progressbar';
			delete spinnerDonutProps.progressBar;
			delete spinnerDonutProps.elementType;
			return React.createElement(this.props.elementType == 'span' ? 'span' : 'div',spinnerDonutProps, spinnerDonutProps.children);
		}
	}
	// Default props for the Donut Spinner component.
	SpinnerDonut.defaultProps = {
		progressBar : false,
		elementType : 'div'
	};
}
