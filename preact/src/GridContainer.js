import { h, render, Component } from 'preact';

// Module constants (change according to your flavor file)
var gridContainerClassName = 'container';

// GridContainer component.
export function GridContainer (attributes){
	var outProps = Object.assign({},attributes);
	if (typeof outProps.className === 'undefined') outProps.className = gridContainerClassName;
	else outProps.className += ' ' + gridContainerClassName;
	return h(
		'div',outProps, outProps.children
	);
}
