import { h, render, Component } from 'preact';
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var inputGroupClassName = 'input-group';
var buttonClassName = 'button';

// FileUpload component.
export function FileUpload (attributes){
	var outProps = Object.assign({}, attributes);
	if (typeof outProps.id === 'undefined') outProps.id = 'fileupload_'+generateUniqueId();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var fileUploadProps = Object.assign({}, outProps);
	fileUploadProps.key = outProps.id + '_input';
	fileUploadProps.type = 'file';
	delete fileUploadProps.labelText;
	childrenToRender.push(
		h(
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
		h(
			'label', labelProps, labelProps.children
		)
	);
	return h(
		'div', {className : outProps.className+' '+inputGroupClassName}, childrenToRender
	);
}
