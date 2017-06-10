let { h, render, Component } = preact;

// Module constants (change according to your flavor file)
var gridRowClassName = 'row';
var gridColumnsClassNamePrefix = 'cols';
var gridColumnExtraSmallSuffix = 'xs';
var gridColumnSmallSuffix = 'sm';
var gridColumnMediumSuffix = 'md';
var gridColumnLargeSuffix = 'lg';

// GridRow component.
function GridRow (props){
	var outProps = Object.assign({},props);
	if (typeof outProps.extraSmall === 'undefined' && typeof outProps.small === 'undefined' && typeof outProps.medium === 'undefined' && typeof outProps.large === 'undefined')
		throw "Error: The 'GridColumn' component must have a defined layout for at least one screen size .";
	if (typeof outProps.className === 'undefined') outProps.className = gridRowClassName;
	else outProps.className += ' ' + gridRowClassName;
	if (typeof outProps.extraSmall !== 'undefined')
			if (outProps.extraSmall == 'fluid') outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnExtraSmallSuffix;
			else outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnExtraSmallSuffix+'-'+outProps.extraSmall;
	if (typeof outProps.small !== 'undefined')
			if (outProps.small == 'fluid') outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnSmallSuffix;
			else outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnSmallSuffix+'-'+outProps.small;
	if (typeof outProps.medium !== 'undefined')
			if (outProps.medium == 'fluid') outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnMediumSuffix;
			else outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnMediumSuffix+'-'+outProps.medium;
	if (typeof outProps.large !== 'undefined')
			if (outProps.large == 'fluid') outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnLargeSuffix;
			else outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnLargeSuffix+'-'+outProps.large;
	delete outProps.extraSmall;
	delete outProps.small;
	delete outProps.medium;
	delete outProps.large;
	return h(
		'div',outProps, outProps.children
	);
}
