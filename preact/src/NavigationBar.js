let { h, render, Component } = preact;
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var navigationSublinkPrefix = 'sublink';

// NavigationBar component.
function NavigationBar(attributes){
	var outProps = Object.assign({},attributes);
	var childrenToRender = [];
	var temp = (Array.isArray(outProps.children)) ? outProps.children : [outProps.children];
	temp.forEach(
		function(child) {
			var navElement = Object.assign({}, child);
			var navElementProps = Object.assign({}, navElement.attributes);
			if (typeof navElementProps.sublink !== 'undefined') {
				if (typeof navElementProps.className === 'undefined') navElementProps.className = navigationSublinkPrefix+'-'+navElementProps.sublink;
				else navElementProps.className += ' ' + navigationSublinkPrefix+'-'+navElementProps.sublink;
				navElementProps.key = 'sublink_'+generateUniqueId();
				delete navElementProps.sublink;
				childrenToRender.push(
					h(
						navElement.type, navElementProps, navElement.children
					)
				);
			}
			else childrenToRender.push(navElement);
		}
	);
	return h(
		'nav',outProps, childrenToRender
	);
}
