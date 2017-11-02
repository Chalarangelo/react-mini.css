import { h, render, Component } from 'preact';

// Image component.
export function Image (attributes){
	var outProps = Object.assign({}, attributes);
	if (typeof outProps.src === 'undefined')
		throw "Error: An 'Image' component must have a 'src' property.";
	if (typeof outProps.alt === 'undefined' && typeof outProps.description === 'undefined')
		throw "Error: An 'Image' component must have an 'alt' and/or 'description' property.";
	if (typeof outProps.alt === 'undefined') outProps.alt = outProps.description;
	if (typeof outProps.description === 'undefined') outProps.description = outProps.alt;
	if (typeof outProps.id === 'undefined') outProps.id = 'image_'+generateUniqueId();
	var imgProps = Object.assign({}, outProps);
	delete imgProps.description;
	imgProps.id += '_img';
	imgProps.key += imgProps.id;
	outProps.children = [];
	outProps.children.push(
		h(
			'img', imgProps
		)
	);
	outProps.children.push(
		h(
			'figcaption', {
				id: outProps.id+'_figcaption',
				key: outProps.id+'_figcaption'
			}, outProps.description
		)
	);
	delete outProps.description;
	return h(
		'figure', outProps, outProps.children
	);
}
