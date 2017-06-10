let { h, render, Component } = preact;

// Module constants (change according to your flavor file)
var tableHorizontalName = 'horizontal';
var tableScrollableName = 'scrollable';
var tablePresetName = 'preset';

// Table component.
function Table (attributes){
	var outProps = Object.assign({}, attributes);
	if (typeof outProps.horizontal === 'undefined') outProps.horizontal = false;
	if (typeof outProps.scrollable === 'undefined') outProps.scrollable = false;
	if (typeof outProps.preset === 'undefined') outProps.preset = false;
	if (outProps.horizontal && outProps.scrollable) throw "Error: A 'Table' component cannot be scrollable and horizontal at the same time.";

	if (typeof outProps.className === 'undefined'){
		outProps.className ='';
		if (outProps.horizontal) outProps.className += ' ' + tableHorizontalName;
		if (outProps.scrollable) outProps.className += ' ' + tableScrollableName;
		if (outProps.preset) outProps.className += ' ' + tablePresetName;
	}
	else {
		if (outProps.horizontal) outProps.className += ' ' + tableHorizontalName;
		if (outProps.scrollable) outProps.className += ' ' + tableScrollableName;
		if (outProps.preset) outProps.className += ' ' + tablePresetName;
	}
	delete outProps.horizontal;
	delete outProps.scrollable;
	delete outProps.preset;
	return h(
		'table', outProps, outProps.children
	);
}
