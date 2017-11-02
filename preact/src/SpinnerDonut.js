import { h, render, Component } from 'preact';

// Module constants (change according to your flavor file)
var spinnerDonutClassName = 'spinner-donut';

// Donut Spinner component.
export function SpinnerDonut (attributes){
	var outProps = Object.assign({}, attributes);
	if (typeof outProps.children !== 'undefined' && outProps.children.length != 0) throw "Error: A 'SpinnerDonut' component must not have any children.";
	if (typeof outProps.progressBar === 'undefined') outProps.progressBar = false;
	if (typeof outProps.elementType === 'undefined') outProps.elementType = 'div';
	if (typeof outProps.className === 'undefined')
		outProps.className =  spinnerDonutClassName;
	else
		outProps.className += ' ' + spinnerDonutClassName;
	if (outProps.progressBar)
		outProps.role = 'progressbar';
	delete outProps.progressBar;
	var elementType = outProps.elementType == 'span' ? 'span' : 'div';
	delete outProps.elementType;
	return h(
		elementType, outProps, outProps.children
	);
}
