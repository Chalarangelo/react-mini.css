let { h, render, Component } = preact;
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var breadcrumbsClassName = 'breadcrumbs';

// Breadcrumbs component.
function Breadcrumbs(attributes){
	var outProps = Object.assign({},attributes);
	if (typeof outProps.className === 'undefined') outProps.className = breadcrumbsClassName;
	else outProps.className += ' ' + breadcrumbsClassName;
	if (typeof outProps.id === 'undefined')	outProps.id = 'breadcrumbs_'+ generateUniqueId();
	outProps.childrenToRender = [];
	var temp = (Array.isArray(outProps.children)) ? outProps.children : [outProps.children];
	temp.forEach(
		function(child) {
			var breadcrumb = Object.assign({}, child);
			outProps.childrenToRender.push(
				h(
					'li', {key: outProps.id+'_breadcrumb_'+generateUniqueId()}, breadcrumb
				)
			);
		}
	);
	var childrenToRender = outProps.childrenToRender;
	delete outProps.childrenToRender;
	return h(
		'ul',outProps, childrenToRender
	);
}
