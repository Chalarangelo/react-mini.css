import React from 'react';

// Module constants (change according to your flavor file)
var cardClassName = 'card';
var sectionClassName = 'section';

// Card component.
function Card(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.className === 'undefined') outProps.className = cardClassName;
	else outProps.className += ' ' + cardClassName;
	return React.createElement(
		'div',outProps, outProps.children
	);
}
// Section component.
function Section(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.className === 'undefined') outProps.className = sectionClassName;
	else outProps.className += ' ' + sectionClassName;
	return React.createElement(
		'div',outProps, outProps.children
	);
}
