let { h, render, Component } = preact;
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var inputGroupClassName = 'input-group';

// Radio component.
function Radio (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.id === 'undefined') outProps.id = 'radio_'+generateUniqueId();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var radioProps = Object.assign({}, outProps);
	radioProps.key = outProps.id + '_input';
	radioProps.type = 'radio';
	delete radioProps.labelText;
	childrenToRender.push(
		h(
			'input', radioProps
		)
	);
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	delete labelProps.id;
	delete labelProps.labelText;
	childrenToRender.push(
		h(
			'label', labelProps, labelProps.children
		)
	);
	return h(
		'div', {className : outProps.className+' '+inputGroupClassName}, childrenToRender
	);
}
