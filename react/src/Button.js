import React, {Component} from 'react';

// Module constants (change according to your flavor file)
var buttonClassName = 'button';

export function Button(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.type === 'undefined') outProps.type = 'button';
	if (outProps.type != 'button' && outProps.type != 'link' && outProps.type != 'label' && outProps.type != 'input' && outProps.type != 'submit' && outProps.type != 'reset')
		 throw "Error: A 'Button' component's 'type' propery must be one of the following: {button, link, label, input, submit, reset}.";
	if (outProps.type == 'link' || outProps.type == 'label')
		if (typeof outProps.className === 'undefined') outProps.className = buttonClassName;
		else outProps.className += ' ' + buttonClassName;
	if (outProps.type == 'link') {
		delete outProps.type;
		return React.createElement(
			'a',outProps, outProps.children
		);
	}
	else if (outProps.type == 'label') {
		delete outProps.type;
		return React.createElement(
			'label',outProps, outProps.children
		);
	}
	else if (outProps.type == 'input' || outProps.type == 'submit' || outProps.type == 'reset'){
		if (outProps.type == 'input') outProps.type = 'button';
		outProps.value = outProps.children;
		delete outProps.children;
		return React.createElement(
			'input',outProps
		);
	}
	return React.createElement(
		'button',outProps, outProps.children
	);
}
