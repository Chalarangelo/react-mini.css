import React from 'react';

// Module constants (change according to your flavor file)
var closeClassName = 'close';

// Close component.
function Close (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.children !== 'undefined') throw "Error: A 'Close' component must not have any children.";
	if (typeof outProps.elementType === 'undefined') outProps.elementType = 'span';
	if (typeof outProps.className === 'undefined')
		outProps.className =  closeClassName;
	else
		outProps.className += ' ' + closeClassName;
	var elementType = outProps.elementType == 'span' ? 'span' : 'div';
	delete outProps.elementType;
	return React.createElement(
		elementType, outProps, outProps.children
	);
}
