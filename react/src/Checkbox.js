import React from 'react';
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var inputGroupClassName = 'input-group';

// Checkbox component.
function Checkbox (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.labelText === 'undefined') throw "Error: The 'Checkbox' component's 'labelText' property is mandatory. Please specify a value.";
	if (typeof outProps.id === 'undefined') outProps.id = 'checkbox_'+generateUniqueId();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var checkboxProps = Object.assign({}, outProps);
	checkboxProps.key = outProps.id + '_input';
	checkboxProps.type = 'checkbox';
	delete checkboxProps.labelText;
	childrenToRender.push(
		React.createElement(
			'input', checkboxProps
		)
	);
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	delete labelProps.id;
	delete labelProps.labelText;
	childrenToRender.push(
		React.createElement(
			'label', labelProps, labelProps.children
		)
	);
	return React.createElement(
		'div', {className : outProps.className+' '+inputGroupClassName}, childrenToRender
	);
}
