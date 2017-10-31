import React from 'react';
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var breadcrumbsClassName = 'breadcrumbs';

// Breadcrumbs component.
export function Breadcrumbs(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.className === 'undefined') outProps.className = breadcrumbsClassName;
	else outProps.className += ' ' + breadcrumbsClassName;
	if (typeof outProps.id === 'undefined')	outProps.id = 'breadcrumbs_'+ generateUniqueId();
	outProps.childrenToRender = [];
	var temp = (Array.isArray(outProps.children)) ? outProps.children : [outProps.children];
	temp.forEach(
		function(child) {
			var breadcrumb = Object.assign({}, child);
			outProps.childrenToRender.push(
				React.createElement(
					'li', {key: outProps.id+'_breadcrumb_'+generateUniqueId()}, breadcrumb
				)
			);
		}
	);
	var childrenToRender = outProps.childrenToRender;
	delete outProps.childrenToRender;
	return React.createElement(
		'ul',outProps, childrenToRender
	);
}
