let { h, render, Component } = preact;
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var inputGroupClassName = 'input-group';
var switchClassName = 'switch';

// Switch component.
function Switch (attributes){
	var outProps = Object.assign({}, attributes);
	if (typeof outProps.id === 'undefined') outProps.id = 'switch_'+generateUniqueId();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var switchProps = Object.assign({}, outProps);
	switchProps.key = outProps.id + '_input';
	if (typeof switchProps.type === 'undefined' || switchProps.type != 'radio') switchProps.type = 'checkbox';
	delete switchProps.labelText;
	childrenToRender.push(
		h(
			'input', switchProps
		)
	);
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	labelProps.className += ' ' + switchClassName;
	delete labelProps.id;
	delete labelProps.labelText;
	delete labelProps.type;
	childrenToRender.push(
		h(
			'label', labelProps, labelProps.children
		)
	);
	return h(
		'div', {className : outProps.className+' '+inputGroupClassName}, childrenToRender
	);
}
