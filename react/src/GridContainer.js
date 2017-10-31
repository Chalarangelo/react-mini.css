import React from 'react';

// Module constants (change according to your flavor file)
var gridContainerClassName = 'container';

// GridContainer component.
export function GridContainer (props){
	var outProps = Object.assign({},props);
	if (typeof outProps.className === 'undefined') outProps.className = gridContainerClassName;
	else outProps.className += ' ' + gridContainerClassName;
	return React.createElement(
		'div',outProps, outProps.children
	);
}
