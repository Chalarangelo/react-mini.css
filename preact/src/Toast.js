let { h, render, Component } = preact;

// Module constants (change according to your flavor file)
var toastClassName = 'toast';

// Toast component.
function Toast(attributes){
	var outProps = Object.assign({},attributes);
	if (typeof outProps.className === 'undefined') outProps.className = toastClassName;
	else outProps.className += ' ' + toastClassName;
	return h(
		'span',outProps, outProps.children
	);
}
