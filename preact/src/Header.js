import { h, render, Component } from 'preact';
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var headerStickyClassName = 'sticky';
var headerLogoClassName = 'logo';
var buttonClassName = 'button';

// Header component.
export function Header(attributes){
	var outProps = Object.assign({},attributes);
	if (typeof outProps.sticky === 'undefined') outProps.sticky = false;
	if (outProps.sticky)
		if (typeof outProps.className === 'undefined') outProps.className = headerStickyClassName;
		else outProps.className += ' ' + headerStickyClassName;
	var childrenToRender = [];
	var temp = (Array.isArray(outProps.children)) ? outProps.children : [outProps.children];
	temp.forEach(
		function(child) {
			var headElement = Object.assign({}, child);
			var headElementProps = Object.assign({}, headElement.attributes);
			if (headElementProps.logo) {
				if (typeof headElementProps.className === 'undefined') headElementProps.className = headerLogoClassName;
				else headElementProps.className += ' ' + headerLogoClassName;
				headElementProps.key = 'logo_'+generateUniqueId();
				delete headElementProps.logo;
				childrenToRender.push(
					h(
						headElement.nodeName, headElementProps, headElement.children
					)
				);
			}
			else if (headElement.nodeName == 'a' || headElement.nodeName == 'label') {
				if (typeof headElementProps.className === 'undefined') headElementProps.className = buttonClassName;
				else headElementProps.className += ' ' + buttonClassName;
				headElementProps.key = 'button_'+generateUniqueId();
				childrenToRender.push(
					h(
						headElement.nodeName, headElementProps, headElement.children
					)
				);
			}
			else childrenToRender.push(headElement);
		}
	);
	delete outProps.sticky;
	return h(
		'header',outProps, childrenToRender
	);
}
