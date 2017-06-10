let { h, render, Component } = preact;
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var headerStickyClassName = 'sticky';
var headerLogoClassName = 'logo';
var buttonClassName = 'button';

// Header component.
function Header(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.sticky === 'undefined') outProps.sticky = false;
	if (outProps.sticky)
		if (typeof outProps.className === 'undefined') outProps.className = headerStickyClassName;
		else outProps.className += ' ' + headerStickyClassName;
	var childrenToRender = [];
	var temp = (Array.isArray(outProps.children)) ? outProps.children : [outProps.children];
	temp.forEach(
		function(child) {
			var headElement = Object.assign({}, child);
			var headElementProps = Object.assign({}, headElement.props);
			if (headElementProps.logo) {
				if (typeof headElementProps.className === 'undefined') headElementProps.className = headerLogoClassName;
				else headElementProps.className += ' ' + headerLogoClassName;
				headElementProps.key = 'logo_'+generateUniqueId();
				delete headElementProps.logo;
				childrenToRender.push(
					h(
						headElement.type, headElementProps, headElementProps.children
					)
				);
			}
			else if (headElement.type == 'a' || headElement.type == 'label') {
				if (typeof headElementProps.className === 'undefined') headElementProps.className = buttonClassName;
				else headElementProps.className += ' ' + buttonClassName;
				headElementProps.key = 'button_'+generateUniqueId();
				childrenToRender.push(
					h(
						headElement.type, headElementProps, headElementProps.children
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
