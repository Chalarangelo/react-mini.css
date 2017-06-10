import React from 'react';
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var navigationSublinkPrefix = 'sublink';

// NavigationBar component.
function NavigationBar(props){
	var outProps = Object.assign({},props);
	var childrenToRender = [];
	var temp = (Array.isArray(outProps.children)) ? outProps.children : [outProps.children];
	temp.forEach(
		function(child) {
			var navElement = Object.assign({}, child);
			var navElementProps = Object.assign({}, navElement.props);
			if (typeof navElementProps.sublink !== 'undefined') {
				if (typeof navElementProps.className === 'undefined') navElementProps.className = navigationSublinkPrefix+'-'+navElementProps.sublink;
				else navElementProps.className += ' ' + navigationSublinkPrefix+'-'+navElementProps.sublink;
				navElementProps.key = 'sublink_'+generateUniqueId();
				delete navElementProps.sublink;
				childrenToRender.push(
					React.createElement(
						navElement.type, navElementProps, navElementProps.children
					)
				);
			}
			else childrenToRender.push(navElement);
		}
	);
	return React.createElement(
		'nav',outProps, childrenToRender
	);
}
