import React from 'react';
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var inputGroupClassName = 'input-group';
var buttonClassName = 'button';

// FileUpload component.
export function FileUpload (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.id === 'undefined') outProps.id = 'fileupload_'+generateUniqueId();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var fileUploadProps = Object.assign({}, outProps);
	fileUploadProps.key = outProps.id + '_input';
	fileUploadProps.type = 'file';
	delete fileUploadProps.labelText;
	childrenToRender.push(
		React.createElement(
			'input', fileUploadProps
		)
	);
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	labelProps.className += ' ' + buttonClassName;
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
