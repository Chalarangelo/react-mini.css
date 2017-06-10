let { h, render, Component } = preact;

// Module constants (change according to your flavor file)
var gridColumnClassNamePrefix = 'col';
var gridColumnExtraSmallSuffix = 'xs';
var gridColumnSmallSuffix = 'sm';
var gridColumnMediumSuffix = 'md';
var gridColumnLargeSuffix = 'lg';
var gridColumnOffsetPrefix = 'offset';

// GridColumn component.
function GridColumn (props){
	var outProps = Object.assign({},props);
	if (typeof outProps.extraSmall === 'undefined' && typeof outProps.small === 'undefined' && typeof outProps.medium === 'undefined' && typeof outProps.large === 'undefined')
		throw "Error: The 'GridColumn' component must have a defined layout for at least one screen size .";
	if (typeof outProps.className === 'undefined') outProps.className = '';
	if (typeof outProps.extraSmall !== 'undefined') {
		if (typeof outProps.extraSmall.width !== 'undefined')
			if (outProps.extraSmall.width == 'fluid') outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnExtraSmallSuffix;
			else outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnExtraSmallSuffix+'-'+outProps.extraSmall.width;
		if (typeof outProps.extraSmall.offset !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnExtraSmallSuffix+'-'+gridColumnOffsetPrefix+'-'+outProps.extraSmall.offset;
		if (typeof outProps.extraSmall.order !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnExtraSmallSuffix+'-'+outProps.extraSmall.order;
	}
	if (typeof outProps.small !== 'undefined') {
		if (typeof outProps.small.width !== 'undefined')
			if (outProps.small.width == 'fluid') outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnSmallSuffix;
			else outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnSmallSuffix+'-'+outProps.small.width;
		if (typeof outProps.small.offset !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnSmallSuffix+'-'+gridColumnOffsetPrefix+'-'+outProps.small.offset;
		if (typeof outProps.small.order !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnSmallSuffix+'-'+outProps.small.order;
	}
	if (typeof outProps.medium !== 'undefined') {
		if (typeof outProps.medium.width !== 'undefined')
			if (outProps.medium.width == 'fluid') outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnMediumSuffix;
			else outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnMediumSuffix+'-'+outProps.medium.width;
		if (typeof outProps.medium.offset !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnMediumSuffix+'-'+gridColumnOffsetPrefix+'-'+outProps.medium.offset;
		if (typeof outProps.medium.order !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnMediumSuffix+'-'+outProps.medium.order;
	}
	if (typeof outProps.large !== 'undefined') {
		if (typeof outProps.large.width !== 'undefined')
			if (outProps.large.width == 'fluid') outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnLargeSuffix;
			else outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnLargeSuffix+'-'+outProps.large.width;
		if (typeof outProps.large.offset !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnLargeSuffix+'-'+gridColumnOffsetPrefix+'-'+outProps.large.offset;
		if (typeof outProps.large.order !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnLargeSuffix+'-'+outProps.large.order;
	}
	delete outProps.extraSmall;
	delete outProps.small;
	delete outProps.medium;
	delete outProps.large;
	return h(
		'div',outProps, outProps.children
	);
}
