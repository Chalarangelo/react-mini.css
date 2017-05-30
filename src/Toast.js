import React from 'react';

module.exports = {
	// Module constants (change according to your flavor file)
	const TOAST_CLASS_NAME = 'toast';
	// Toast component.
	class Toast extends React.Component {
		render() {
			var toastProps = Object.assign({},this.props);
			if (typeof toastProps.className === 'undefined')
				toastProps.className = TOAST_CLASS_NAME;
			else
				toastProps.className += ' ' + TOAST_CLASS_NAME;
			return React.createElement('span',toastProps, toastProps.children);
		}
	}
}
