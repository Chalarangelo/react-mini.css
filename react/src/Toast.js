import React from 'react';

// Module constants (change according to your flavor file)
var toastClassName = 'toast';

// Toast component.
export function Toast(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.className === 'undefined') outProps.className = toastClassName;
	else outProps.className += ' ' + toastClassName;
	return React.createElement(
		'span',outProps, outProps.children
	);
}
