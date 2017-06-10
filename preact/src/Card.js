let { h, render, Component } = preact;

// Module constants (change according to your flavor file)
var cardClassName = 'card';
var sectionClassName = 'section';

// Card component.
function Card(attributes){
	var outProps = Object.assign({},attributes);
	if (typeof outProps.className === 'undefined') outProps.className = cardClassName;
	else outProps.className += ' ' + cardClassName;
	return h(
		'div',outProps, outProps.children
	);
}
// Section component.
function Section(attributes){
	var outProps = Object.assign({},attributes);
	if (typeof outProps.className === 'undefined') outProps.className = sectionClassName;
	else outProps.className += ' ' + sectionClassName;
	return h(
		'div',outProps, outProps.children
	);
}
