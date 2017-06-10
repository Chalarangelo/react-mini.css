let { h, render, Component } = preact;

// Module constants (change according to your flavor file)
var spinnerDonutClassName = 'spinner-donut';

// Donut Spinner component.
function SpinnerDonut (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.children !== 'undefined') throw "Error: A 'SpinnerDonut' component must not have any children.";
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
