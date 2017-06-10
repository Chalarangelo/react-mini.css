let { h, render, Component } = preact;
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var drawerToggleClassName = 'drawer-toggle';
var drawerClassName = 'drawer';
var drawerRightClassName = 'right';
var drawerPersistenClassName = 'persistent';
var drawerCloseName = 'close';

// DrawerToggle component.
function DrawerToggle(props){
	var outProps = Object.assign({},props);
	if (typeof outProps['htmlFor'] === 'undefined') throw "Error: A 'DrawerToggle' component must have an 'htmlFor' attribute.";
	if (typeof outProps.className === 'undefined') outProps.className = drawerToggleClassName;
	else outProps.className += ' ' + drawerToggleClassName;
	if (typeof outProps.persistent === 'undefined') outProps.persistent = false;
	if (outProps.persistent) outProps.className += ' ' + drawerPersistenClassName;
	delete outProps.persistent;
	return h(
		'label',outProps
	);
}

// Drawer component.
function Drawer(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.id === 'undefined') throw "Error: A 'Drawer' component must have an 'id' attribute.";
	if (typeof outProps.className === 'undefined') outProps.className = drawerClassName;
	else outProps.className += ' ' + drawerClassName;
	if (typeof outProps.right === 'undefined') outProps.right = false;
	if (typeof outProps.persistent === 'undefined') outProps.persistent = false;
	if (outProps.right) outProps.className += ' ' + drawerRightClassName;
	if (outProps.persistent) outProps.className += ' ' + drawerPersistenClassName;
	var childrenToRender = [];
	childrenToRender.push(
		h(
			'input', {
				id: outProps.id,
				type: 'checkbox',
				key: outProps.id+generateUniqueId()+'_checkbox'
			}
		)
	);
	var children = (Array.isArray(outProps.children)) ? outProps.children : [outProps.children];
	children.push(
		h(
			'label', {
				'htmlFor':outProps.id,
				className: drawerCloseName,
				key: outProps.id+generateUniqueId()+'_close'
			}
		)
	);
	delete outProps.id;
	delete outProps.right;
	delete outProps.persistent;
	outProps.key = outProps.id+generateUniqueId()+'_drawer'
	childrenToRender.push(
		h(
			'div', outProps, children
		)
	);
	return h(
		'div',{},childrenToRender
	);
}
