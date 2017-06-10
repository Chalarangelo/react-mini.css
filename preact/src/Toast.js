let { h, render, Component } = preact;

// Module constants (change according to your flavor file)
var toastClassName = 'toast';

// Toast component.
function Toast(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.className === 'undefined') outProps.className = toastClassName;
	else outProps.className += ' ' + toastClassName;
	return h(
		'span',outProps, outProps.children
	);
}
