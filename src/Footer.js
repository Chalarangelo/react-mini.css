import React from 'react';

// Module constants (change according to your flavor file)
var footerStickyClassName = 'sticky';

// Footer component.
function Footer(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.sticky === 'undefined') outProps.sticky = false;
	if (outProps.sticky)
		if (typeof outProps.className === 'undefined') outProps.className = footerStickyClassName;
		else outProps.className += ' ' + footerStickyClassName;
	delete outProps.sticky;
	return React.createElement(
		'footer',outProps, outProps.children
	);
}
