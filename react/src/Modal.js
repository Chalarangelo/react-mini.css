import React from 'react';
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var modalClassName = 'modal';
var cardClassName = 'card';
var closeClassName = 'close';

// Modal component.
export function Modal(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.id === 'undefined')	outProps.id = 'modal_'+ generateUniqueId();
	if (typeof outProps.noLabel === 'undefined')	outProps.noLabel = false;
	if (!outProps.noLabel && typeof outProps.labelText === 'undefined') outProps.labelText = 'Open modal dialog';
	outProps.modalCardChildren = (Array.isArray(outProps.children)) ? outProps.children : [outProps.children];
	outProps.modalCardChildren.push(
		React.createElement(
			'label', {
				'htmlFor': outProps.id,
				className: closeClassName,
				key: outProps.id+'_close'
			}
		)
	);
	if (typeof outProps.className === 'undefined') outProps.className = cardClassName;
	else outProps.className += ' ' + cardClassName;
	outProps.modalChildren = [];
	outProps.modalChildren.push(
		React.createElement(
			'div', {
				className: outProps.className,
				key: outProps.id+'_card'
			}, outProps.modalCardChildren
		)
	);
	outProps.childrenToRender = [];
	if (!outProps.noLabel) {
		outProps.childrenToRender.push(
			React.createElement(
				'label', {
					'htmlFor' : outProps.id,
					key: outProps.id+'_label'
				}, outProps.labelText
			)
		);
	}
	outProps.childrenToRender.push(
		React.createElement(
			'input',{
				type: 'checkbox',
				id : outProps.id,
				key: outProps.id+'_toggle',
				defaultChecked : false}
		)
	);
	outProps.childrenToRender.push(
		React.createElement(
			'div', {
				className: modalClassName,
				key: outProps.id+'_modal'
			}, outProps.modalChildren
		)
	);
	var childrenToRender = outProps.childrenToRender;
	delete outProps.modalChildren;
	delete outProps.childrenToRender;
	delete outProps.className;
	delete outProps.noLabel;
	delete outProps.modalCardChildren;
	delete outProps.labelText;
	outProps.id = outProps.id+'wrapper';
	return React.createElement(
		'div',outProps, childrenToRender
	);
}
