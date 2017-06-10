let { h, render, Component } = preact;

// Module constants (change according to your flavor file)
var footerStickyClassName = 'sticky';

// Footer component.
function Footer(attributes){
	var outProps = Object.assign({},attributes);
	if (typeof outProps.sticky === 'undefined') outProps.sticky = false;
	if (outProps.sticky)
		if (typeof outProps.className === 'undefined') outProps.className = footerStickyClassName;
		else outProps.className += ' ' + footerStickyClassName;
	delete outProps.sticky;
	return h(
		'footer',outProps, outProps.children
	);
}
