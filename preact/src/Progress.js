import { h, render, Component } from 'preact';

// Module constants (change according to your flavor file)
var progressMaxValue = 1000;
// Progress component.
export function Progress(attributes) {
	var outProps = Object.assign({},attributes);
	if (typeof outProps.max === 'undefined') outProps.max = progressMaxValue;
	if (typeof outProps.value === 'undefined') outProps.value = 0;
	var isPercentage = false;
	if (/^\d+(\.\d+)?%$/.test(outProps.value)) {
		outProps.value = outProps.value.slice(0, -1);
		isPercentage = true;
	}
	if(!isPercentage && parseInt(outProps.value) >= parseInt(outProps.max)) throw "Error: The 'value' property of a 'Progress' element must be less or equal to its 'max' property.";
	if(outProps.max != progressMaxValue){
		if (isPercentage)
			outProps.value = outProps.value/100 * progressMaxValue;
		else {
			outProps.value = (progressMaxValue / outProps.max) * outProps.value;
		}
		outProps.max = progressMaxValue;
	}
	else if (isPercentage) outProps.value = outProps.value/100 * progressMaxValue;
	return h(
		'progress', outProps, outProps.children
	);
}
