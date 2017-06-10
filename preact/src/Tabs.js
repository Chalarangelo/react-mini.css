let { h, render, Component } = preact;
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var tabsClassName = 'tabs';
var tabsStackedClassName = 'stacked';

// Technically speaking, the Tab is a non-component, meaning it should not be
// rendered on its own. It depends on the Tabs component for proper rendering.
function Tab(attributes){
	var outProps = Object.assign({}, attributes);
	if (typeof outProps.checked === 'undefined') outProps.checked = false;
	if (typeof outProps.defaultChecked === 'undefined') outProps.defaultChecked = false;
	if (typeof outProps.tabTitle === 'undefined') throw "Error: The 'tabTitle' property of the 'Tab' component is mandatory.";
	delete outProps.tabTitle;
	return h(
		'div', outProps, outProps.children
	);
}

// Tabs component.
function Tabs(attributes){
	var outProps = Object.assign({}, attributes);
	if (typeof outProps.stacked === 'undefined') outProps.stacked = false;
	if (typeof outProps.multiple === 'undefined') outProps.multiple = false;
	var group = 'tab_group_'+ generateUniqueId();
	var children = [];
	var temp = (Array.isArray(outProps.children)) ? outProps.children : [outProps.children];
	temp.forEach(
		function(child) {
			if (!child instanceof Tab) throw "Error: All children of a 'Tabs' component must be 'Tab' components.";
			var tab = Object.assign({}, child);
			tab.internalId = 'tab_' + generateUniqueId();
			children.push(tab);
		}
	);
	var childrenToRender = [];
	var tabbingType = (outProps.multiple && outProps.stacked) ? 'checkbox' : 'radio';
	var hasChecked = false;
	children.forEach(
		function(child) {
			if (child.attributes.checked || child.attributes.defaultChecked) hasChecked = true;
			childrenToRender.push(
				h(
					'input', {
						type: tabbingType,
						name : group,
						key : child.internalId+'_input',
						id : child.internalId,
						defaultChecked : (child.attributes.checked || child.attributes.defaultChecked) ? true : false,
						'aria-hidden': 'true'}
					)
			);
			childrenToRender.push(
				h(
					'label', {
						'htmlFor' : child.internalId,
						key : child.internalId+'_label',
						'aria-hidden' : 'true'
					}, child.attributes.tabTitle
				)
			);
			var childProps = Object.assign({}, child.attributes);
			childProps.key = child.internalId+'_content';
			delete childProps.tabTitle;
			childrenToRender.push(
				h(
					'div', childProps, child.children
				)
			);
		}
	);
	if (!hasChecked && !outProps.multiple)
		childrenToRender[0] = h(
			'input', {
				type: tabbingType,
				name : group,
				key : children[0].internalId,
				id : children[0].internalId,
				defaultChecked : true,
				'aria-hidden':'true'
			}
		);
	if (typeof outProps.className === 'undefined')
		outProps.className = (outProps.stacked) ? (tabsClassName + ' ' + tabsStackedClassName) : tabsClassName;
	else
		outProps.className += (outProps.stacked) ? (' ' + tabsClassName + ' ' + tabsStackedClassName) : tabsClassName;
	delete outProps.stacked;
	delete outProps.multiple;
	return h(
		'div',outProps,childrenToRender
	);
}
