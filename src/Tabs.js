import React from 'react';
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var tabsClassName = 'tabs';
var tabsStackedClassName = 'stacked';

// Technically speaking, the Tab is a non-component, meaning it should not be
// rendered on its own. It depends on the Tabs component for proper rendering.
function Tab(props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.checked === 'undefined') outProps.checked = false;
	if (typeof outProps.defaultChecked === 'undefined') outProps.defaultChecked = false;
	if (typeof outProps.tabTitle === 'undefined') throw "Error: The 'tabTitle' property of the 'Tab' component is mandatory";
	delete outProps.tabTitle;
	return React.createElement(
		'div', outProps, outProps.children
	);
}

// Tabs component.
function Tabs(props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.stacked === 'undefined') outProps.stacked = false;
	if (typeof outProps.tabbingType === 'undefined') outProps.tabbingType = 'radio';
	var group = 'tab_group_'+ generateUniqueId();
	var children = [];
	var temp = (Array.isArray(props.children)) ? props.children : [props.children];
	temp.forEach(
		function(child) {
			if (!child instanceof Tab) throw "Error: All children of a 'Tabs' component must be 'Tab' components.";
			var tab = Object.assign({}, child);
			tab.internalId = 'tab_' + generateUniqueId();
			children.push(tab);
		}
	);
	var childrenToRender = [];
	var tabbingType = (props.tabbingType == 'checkbox' && props.stacked) ? 'checkbox' : 'radio';
	var hasChecked = false;
	children.forEach(
		function(child) {
			if (child.props.checked || child.props.defaultChecked) hasChecked = true;
			childrenToRender.push(
				React.createElement(
					'input', {
						type: tabbingType,
						name : group,
						key : child.internalId+'_input',
						id : child.internalId,
						defaultChecked : (child.props.checked || child.props.defaultChecked) ? true : false,
						'aria-hidden': 'true'}
					)
			);
			childrenToRender.push(
				React.createElement(
					'label', {
						'htmlFor' : child.internalId,
						key : child.internalId+'_label',
						'aria-hidden' : 'true'
					}, child.props.tabTitle
				)
			);
			var childProps = Object.assign({}, child.props);
			childProps.key = child.internalId+'_content';
			delete childProps.tabTitle;
			childrenToRender.push(
				React.createElement(
					'div', childProps, childProps.children
				)
			);
		}
	);
	if (!hasChecked)
		childrenToRender[0] = React.createElement(
			'input', {
				type: tabbingType,
				name : group,
				key : children[0].internalId,
				id : children[0].internalId,
				defaultChecked : true,
				'aria-hidden':'true'
			}
		);
	var outProps = Object.assign({}, props);
	if (typeof outProps.className === 'undefined')
		outProps.className = (props.stacked) ? (tabsClassName + ' ' + tabsStackedClassName) : tabsClassName;
	else
		outProps.className += (props.stacked) ? (' ' + tabsClassName + ' ' + tabsStackedClassName) : tabsClassName;
	delete outProps.stacked;
	delete outProps.tabbingType;
	return React.createElement(
		'div',outProps,childrenToRender
	);
}
