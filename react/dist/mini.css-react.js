import React from 'react';

// Constants (change according to your flavor file)
var gridContainerClassName = 'container';
var gridRowClassName = 'row';
var gridColumnsClassNamePrefix = 'cols';
var gridColumnClassNamePrefix = 'col';
var gridColumnExtraSmallSuffix = 'xs';
var gridColumnSmallSuffix = 'sm';
var gridColumnMediumSuffix = 'md';
var gridColumnLargeSuffix = 'lg';
var gridColumnOffsetPrefix = 'offset';

var inputGroupClassName = 'input-group';
var inputGroupFluidClassName = 'fluid';
var inputGroupVerticalClassName = 'vertical';
var switchClassName = 'switch';
var buttonClassName = 'button';

var headerStickyClassName = 'sticky';
var headerLogoClassName = 'logo';
var navigationSublinkPrefix = 'sublink';
var drawerToggleClassName = 'drawer-toggle';
var drawerClassName = 'drawer';
var drawerRightClassName = 'right';
var drawerPersistenClassName = 'persistent';
var drawerCloseName = 'close';
var footerStickyClassName = 'sticky';

var tableHorizontalName = 'horizontal';
var tableScrollableName = 'scrollable';
var tablePresetName = 'preset';

var cardClassName = 'card';
var sectionClassName = 'section';

var tabsClassName = 'tabs';
var tabsStackedClassName = 'stacked';

var toastClassName = 'toast';
var tooltipClassName = 'tooltip';
var tooltipBottomClassName = 'bottom';
var modalClassName = 'modal';
var cardClassName = 'card';
var closeClassName = 'close';

var progressMaxValue = 1000;
var spinnerDonutClassName = 'spinner-donut';

var breadcrumbsClassName = 'breadcrumbs';

// Utility function for 'unique' id generation.
function generateUniqueId(){
    var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
    do {
        var ascicode=Math.floor((Math.random()*42)+48);
        if (ascicode<58 || ascicode>64){
            idstr+=String.fromCharCode(ascicode);
        }
    } while (idstr.length<32);
    return (idstr);
}

// Image component.
function Image (props){
	var outProps = Object.assign({}, props);
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
	  React.createElement(
			'img', imgProps
		)
	);
	outProps.children.push(
	  React.createElement(
			'figcaption', {
				id: outProps.id+'_figcaption',
				key: outProps.id+'_figcaption'
			}, outProps.description
		)
	);
	delete outProps.description;
	return  React.createElement(
		'figure', outProps, outProps.children
	);
}

// GridContainer component.
function GridContainer (props){
	var outProps = Object.assign({},props);
	if (typeof outProps.className === 'undefined') outProps.className = gridContainerClassName;
	else outProps.className += ' ' + gridContainerClassName;
	return  React.createElement(
		'div',outProps, outProps.children
	);
}

// GridRow component.
function GridRow (props){
	var outProps = Object.assign({},props);
	if (typeof outProps.extraSmall === 'undefined' && typeof outProps.small === 'undefined' && typeof outProps.medium === 'undefined' && typeof outProps.large === 'undefined')
		throw "Error: The 'GridColumn' component must have a defined layout for at least one screen size .";
	if (typeof outProps.className === 'undefined') outProps.className = gridRowClassName;
	else outProps.className += ' ' + gridRowClassName;
	if (typeof outProps.extraSmall !== 'undefined')
			if (outProps.extraSmall == 'fluid') outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnExtraSmallSuffix;
			else outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnExtraSmallSuffix+'-'+outProps.extraSmall;
	if (typeof outProps.small !== 'undefined')
			if (outProps.small == 'fluid') outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnSmallSuffix;
			else outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnSmallSuffix+'-'+outProps.small;
	if (typeof outProps.medium !== 'undefined')
			if (outProps.medium == 'fluid') outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnMediumSuffix;
			else outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnMediumSuffix+'-'+outProps.medium;
	if (typeof outProps.large !== 'undefined')
			if (outProps.large == 'fluid') outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnLargeSuffix;
			else outProps.className += ' ' + gridColumnsClassNamePrefix+'-'+gridColumnLargeSuffix+'-'+outProps.large;
	delete outProps.extraSmall;
	delete outProps.small;
	delete outProps.medium;
	delete outProps.large;
	return  React.createElement(
		'div',outProps, outProps.children
	);
}

// GridColumn component.
function GridColumn (props){
	var outProps = Object.assign({},props);
	if (typeof outProps.extraSmall === 'undefined' && typeof outProps.small === 'undefined' && typeof outProps.medium === 'undefined' && typeof outProps.large === 'undefined')
		throw "Error: The 'GridColumn' component must have a defined layout for at least one screen size .";
	if (typeof outProps.className === 'undefined') outProps.className = '';
	if (typeof outProps.extraSmall !== 'undefined') {
		if (typeof outProps.extraSmall.width !== 'undefined')
			if (outProps.extraSmall.width == 'fluid') outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnExtraSmallSuffix;
			else outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnExtraSmallSuffix+'-'+outProps.extraSmall.width;
		if (typeof outProps.extraSmall.offset !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnExtraSmallSuffix+'-'+gridColumnOffsetPrefix+'-'+outProps.extraSmall.offset;
		if (typeof outProps.extraSmall.order !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnExtraSmallSuffix+'-'+outProps.extraSmall.order;
	}
	if (typeof outProps.small !== 'undefined') {
		if (typeof outProps.small.width !== 'undefined')
			if (outProps.small.width == 'fluid') outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnSmallSuffix;
			else outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnSmallSuffix+'-'+outProps.small.width;
		if (typeof outProps.small.offset !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnSmallSuffix+'-'+gridColumnOffsetPrefix+'-'+outProps.small.offset;
		if (typeof outProps.small.order !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnSmallSuffix+'-'+outProps.small.order;
	}
	if (typeof outProps.medium !== 'undefined') {
		if (typeof outProps.medium.width !== 'undefined')
			if (outProps.medium.width == 'fluid') outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnMediumSuffix;
			else outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnMediumSuffix+'-'+outProps.medium.width;
		if (typeof outProps.medium.offset !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnMediumSuffix+'-'+gridColumnOffsetPrefix+'-'+outProps.medium.offset;
		if (typeof outProps.medium.order !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnMediumSuffix+'-'+outProps.medium.order;
	}
	if (typeof outProps.large !== 'undefined') {
		if (typeof outProps.large.width !== 'undefined')
			if (outProps.large.width == 'fluid') outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnLargeSuffix;
			else outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnLargeSuffix+'-'+outProps.large.width;
		if (typeof outProps.large.offset !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnLargeSuffix+'-'+gridColumnOffsetPrefix+'-'+outProps.large.offset;
		if (typeof outProps.large.order !== 'undefined')
			outProps.className += ' ' + gridColumnClassNamePrefix+'-'+gridColumnLargeSuffix+'-'+outProps.large.order;
	}
	delete outProps.extraSmall;
	delete outProps.small;
	delete outProps.medium;
	delete outProps.large;
	return  React.createElement(
		'div',outProps, outProps.children
	);
}

// InputGroup component.
function InputGroup (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.fluid === 'undefined') outProps.fluid = false;
	if (typeof outProps.vertical === 'undefined') outProps.vertical = false;
	if (outProps.fluid && outProps.vertical) throw "Error: A 'Table' component cannot be fluid and vertical at the same time.";
	if (typeof outProps.className === 'undefined') outProps.className = inputGroupClassName;
	else outProps.className += ' ' + inputGroupClassName;
	if (outProps.fluid) outProps.className += ' ' + inputGroupFluidClassName;
	if (outProps.vertical) outProps.className += ' ' + inputGroupVerticalClassName;
	delete outProps.fluid;
	delete outProps.vertical;
	return  React.createElement(
		'div', outProps, outProps.children
	);
}

// Checkbox component.
function Checkbox (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.id === 'undefined') outProps.id = 'checkbox_'+generateUniqueId();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var checkboxProps = Object.assign({}, outProps);
	checkboxProps.key = outProps.id + '_input';
	checkboxProps.type = 'checkbox';
	delete checkboxProps.labelText;
	childrenToRender.push(
	  React.createElement(
			'input', checkboxProps
		)
	);
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	delete labelProps.id;
	delete labelProps.labelText;
	childrenToRender.push(
	  React.createElement(
			'label', labelProps, labelProps.children
		)
	);
	return  React.createElement(
		'div', {className : outProps.className+' '+inputGroupClassName}, childrenToRender
	);
}

// Radio component.
function Radio (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.id === 'undefined') outProps.id = 'radio_'+generateUniqueId();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var radioProps = Object.assign({}, outProps);
	radioProps.key = outProps.id + '_input';
	radioProps.type = 'radio';
	delete radioProps.labelText;
	childrenToRender.push(
	  React.createElement(
			'input', radioProps
		)
	);
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	delete labelProps.id;
	delete labelProps.labelText;
	childrenToRender.push(
	  React.createElement(
			'label', labelProps, labelProps.children
		)
	);
	return  React.createElement(
		'div', {className : outProps.className+' '+inputGroupClassName}, childrenToRender
	);
}

// Switch component.
function Switch (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.id === 'undefined') outProps.id = 'switch_'+generateUniqueId();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var switchProps = Object.assign({}, outProps);
	switchProps.key = outProps.id + '_input';
	if (typeof switchProps.type === 'undefined' || switchProps.type != 'radio') switchProps.type = 'checkbox';
	delete switchProps.labelText;
	childrenToRender.push(
	  React.createElement(
			'input', switchProps
		)
	);
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	labelProps.className += ' ' + switchClassName;
	delete labelProps.id;
	delete labelProps.labelText;
	delete labelProps.type;
	childrenToRender.push(
	  React.createElement(
			'label', labelProps, labelProps.children
		)
	);
	return  React.createElement(
		'div', {className : outProps.className+' '+inputGroupClassName}, childrenToRender
	);
}

// Button component.
function Button(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.type === 'undefined') outProps.type = 'button';
	if (outProps.type != 'button' && outProps.type != 'link' && outProps.type != 'label' && outProps.type != 'input' && outProps.type != 'submit' && outProps.type != 'reset')
		 throw "Error: A 'Button' component's 'type' propery must be one of the following: {button, link, label, input, submit, reset}.";
	if (outProps.type == 'link' || outProps.type == 'label')
		if (typeof outProps.className === 'undefined') outProps.className = buttonClassName;
		else outProps.className += ' ' + buttonClassName;
	if (outProps.type == 'link') {
		delete outProps.type;
		return  React.createElement(
			'a',outProps, outProps.children
		);
	}
	else if (outProps.type == 'label') {
		delete outProps.type;
		return  React.createElement(
			'label',outProps, outProps.children
		);
	}
	else if (outProps.type == 'input' || outProps.type == 'submit' || outProps.type == 'reset'){
		if (outProps.type == 'input') outProps.type = 'button';
		outProps.value = outProps.children;
		delete outProps.children;
		return  React.createElement(
			'input',outProps,
		);
	}
	return  React.createElement(
		'button',outProps, outProps.children
	);
}

// FileUpload component.
function FileUpload (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.id === 'undefined') outProps.id = 'fileupload_'+generateUniqueId();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var fileUploadProps = Object.assign({}, outProps);
	fileUploadProps.key = outProps.id + '_input';
	fileUploadProps.type = 'file';
	delete fileUploadProps.labelText;
	childrenToRender.push(
	  React.createElement(
			'input', fileUploadProps
		)
	);
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	labelProps.className += ' ' + buttonClassName;
	delete labelProps.id;
	delete labelProps.labelText;
	childrenToRender.push(
	  React.createElement(
			'label', labelProps, labelProps.children
		)
	);
	return  React.createElement(
		'div', {className : outProps.className+' '+inputGroupClassName}, childrenToRender
	);
}

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
				  React.createElement(
						headElement.type, headElementProps, headElementProps.children
					)
				);
			}
			else if (headElement.type == 'a' || headElement.type == 'label') {
				if (typeof headElementProps.className === 'undefined') headElementProps.className = buttonClassName;
				else headElementProps.className += ' ' + buttonClassName;
				headElementProps.key = 'button_'+generateUniqueId();
				childrenToRender.push(
				  React.createElement(
						headElement.type, headElementProps, headElementProps.children
					)
				);
			}
			else childrenToRender.push(headElement);
		}
	);
	delete outProps.sticky;
	return  React.createElement(
		'header',outProps, childrenToRender
	);
}

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
	return  React.createElement(
		'nav',outProps, childrenToRender
	);
}

// DrawerToggle component.
function DrawerToggle(props){
	var outProps = Object.assign({},props);
	if (typeof outProps['htmlFor'] === 'undefined') throw "Error: A 'DrawerToggle' component must have an 'htmlFor' attribute.";
	if (typeof outProps.className === 'undefined') outProps.className = drawerToggleClassName;
	else outProps.className += ' ' + drawerToggleClassName;
	if (typeof outProps.persistent === 'undefined') outProps.persistent = false;
	if (outProps.persistent) outProps.className += ' ' + drawerPersistenClassName;
	delete outProps.persistent;
	return  React.createElement(
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
	  React.createElement(
			'input', {
				id: outProps.id,
				type: 'checkbox',
				key: outProps.id+generateUniqueId()+'_checkbox';
			}
		)
	);
	var children = (Array.isArray(outProps.children)) ? outProps.children : [outProps.children];
	children.push(
	  React.createElement(
			'label', {
				'htmlFor':outProps.id,
				className: drawerCloseName,
				key: outProps.id+generateUniqueId()+'_close';
			}
		)
	);
	delete outProps.id;
	delete outProps.right;
	delete outProps.persistent;
	outProps.key = outProps.id+generateUniqueId()+'_drawer';
	childrenToRender.push(
	  React.createElement(
			'div', outProps, children
		)
	);
	return  React.createElement(
		'div',{},childrenToRender
	);
}

// Footer component.
function Footer(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.sticky === 'undefined') outProps.sticky = false;
	if (outProps.sticky)
		if (typeof outProps.className === 'undefined') outProps.className = footerStickyClassName;
		else outProps.className += ' ' + footerStickyClassName;
	delete outProps.sticky;
	return  React.createElement(
		'footer',outProps, outProps.children
	);
}

// Table component.
function Table (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.horizontal === 'undefined') outProps.horizontal = false;
	if (typeof outProps.scrollable === 'undefined') outProps.scrollable = false;
	if (typeof outProps.preset === 'undefined') outProps.preset = false;
	if (outProps.horizontal && outProps.scrollable) throw "Error: A 'Table' component cannot be scrollable and horizontal at the same time.";

	if (typeof outProps.className === 'undefined'){
		outProps.className ='';
		if (outProps.horizontal) outProps.className += ' ' + tableHorizontalName;
		if (outProps.scrollable) outProps.className += ' ' + tableScrollableName;
		if (outProps.preset) outProps.className += ' ' + tablePresetName;
	}
	else {
		if (outProps.horizontal) outProps.className += ' ' + tableHorizontalName;
		if (outProps.scrollable) outProps.className += ' ' + tableScrollableName;
		if (outProps.preset) outProps.className += ' ' + tablePresetName;
	}
	delete outProps.horizontal;
	delete outProps.scrollable;
	delete outProps.preset;
	return  React.createElement(
		'table', outProps, outProps.children
	);
}

// Card component.
function Card(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.className === 'undefined') outProps.className = cardClassName;
	else outProps.className += ' ' + cardClassName;
	return  React.createElement(
		'div',outProps, outProps.children
	);
}

// Section component.
function Section(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.className === 'undefined') outProps.className = sectionClassName;
	else outProps.className += ' ' + sectionClassName;
	return  React.createElement(
		'div',outProps, outProps.children
	);
}

// Technically speaking, the Tab is a non-component, meaning it should not be
// rendered on its own. It depends on the Tabs component for proper rendering.
function Tab(props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.checked === 'undefined') outProps.checked = false;
	if (typeof outProps.defaultChecked === 'undefined') outProps.defaultChecked = false;
	if (typeof outProps.tabTitle === 'undefined') throw "Error: The 'tabTitle' property of the 'Tab' component is mandatory.";
	delete outProps.tabTitle;
	return  React.createElement(
		'div', outProps, outProps.children
	);
}

// Tabs component.
function Tabs(props){
	var outProps = Object.assign({}, props);
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
	if (!hasChecked && !outProps.multiple)
		childrenToRender[0] =  React.createElement(
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
	return  React.createElement(
		'div',outProps,childrenToRender
	);
}

// Toast component.
function Toast(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.className === 'undefined') outProps.className = toastClassName;
	else outProps.className += ' ' + toastClassName;
	return  React.createElement(
		'span',outProps, outProps.children
	);
}

// Tooltip component.
function Tooltip(props) {
	var outProps = Object.assign({},props);
	if (typeof outProps.tooltipText === 'undefined') throw "Error: The 'Tooltip' component's 'tooltipText' property is mandatory. Please specify a value.";
	if (typeof outProps.bottom === 'undefined') outProps.bottom = false;
	if (typeof outProps.className === 'undefined')
		outProps.className = (outProps.bottom) ? (tooltipClassName + ' ' + tooltipBottomClassName) : tooltipClassName;
	else
		outProps.className += (outProps.bottom) ? (' ' + tooltipClassName + ' ' + tooltipBottomClassName) : tooltipClassName;
	outProps['aria-label'] = outProps.tooltipText;
	delete outProps.tooltipText;
	delete outProps.bottom;
	return  React.createElement(
		'span',outProps, outProps.children
	);
}

// Modal component.
function Modal(props){
	var outProps = Object.assign({},props);
	if (typeof outProps.id === 'undefined')	outProps.id = 'modal_'+ generateUniqueId();
	if (typeof outProps.noLabel === 'undefined')	outProps.noLabel = false;
	if (!outProps.noLabel && typeof outProps.labelText === 'undefined') outProps.labelText = 'Open modal dialog';
	outProps.modalCardChildren = (Array.isArray(outProps.children)) ? outProps.children : [outProps.children];
	outProps.modalCardChildren.push(
	  React.createElement(
			'label', {
				'htmlFor': outProps.id,
				className: closeClassName,
				key: outProps.id+'_close'
			}
		)
	);
	if (typeof outProps.className === 'undefined') outProps.className = cardClassName;
	else outProps.className += ' ' + cardClassName;
	outProps.modalChildren = [];
	outProps.modalChildren.push(
	  React.createElement(
			'div', {
				className: outProps.className,
				key: outProps.id+'_card'
			}, outProps.modalCardChildren
		)
	);
	outProps.childrenToRender = [];
	if (!outProps.noLabel) {
		outProps.childrenToRender.push(
		  React.createElement(
				'label', {
					'htmlFor' : outProps.id,
					key: outProps.id+'_label'
				}, outProps.labelText
			)
		);
	}
	outProps.childrenToRender.push(
	  React.createElement(
			'input',{
				type: 'checkbox',
				id : outProps.id,
				key: outProps.id+'_toggle',
				defaultChecked : false}
		)
	);
	outProps.childrenToRender.push(
	  React.createElement(
			'div', {
				className: modalClassName,
				key: outProps.id+'_modal'
			}, outProps.modalChildren
		)
	);
	var childrenToRender = outProps.childrenToRender;
	delete outProps.modalChildren;
	delete outProps.childrenToRender;
	delete outProps.className;
	delete outProps.noLabel;
	delete outProps.modalCardChildren;
	delete outProps.labelText;
	outProps.id = outProps.id+'wrapper';
	return  React.createElement(
		'div',outProps, childrenToRender
	);
}

// Progress component.
function Progress(props) {
	var outProps = Object.assign({},props);
	if (typeof outProps.max === 'undefined') outProps.max = progressMaxValue;
	if (typeof outProps.value === 'undefined') outProps.value = 0;
	var isPercentage = false;
	if (/^\d+(\.\d+)?%$/.test(outProps.value)) {
		outProps.value = outProps.value.slice(0, -1);
		isPercentage = true;
	}
	if(!isPercentage && parseInt(outProps.value) >= parseInt(outProps.max)) throw "Error: The 'value' property of a 'Progress' element must be less or equal to its 'max' property.";
	if(outProps.max != progressMaxValue){
		if (isPercentage)
			outProps.value = outProps.value/100 * progressMaxValue;
		else {
			outProps.value = (progressMaxValue / outProps.max) * outProps.value;
		}
		outProps.max = progressMaxValue;
	}
	else if (isPercentage) outProps.value = outProps.value/100 * progressMaxValue;
	return  React.createElement(
		'progress', outProps, outProps.children
	);
}

// Donut Spinner component.
function SpinnerDonut (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.children !== 'undefined') throw "Error: A 'SpinnerDonut' component must not have any children.";
	if (typeof outProps.progressBar === 'undefined') outProps.progressBar = false;
	if (typeof outProps.elementType === 'undefined') outProps.elementType = 'div';
	if (typeof outProps.className === 'undefined')
		outProps.className =  spinnerDonutClassName;
	else
		outProps.className += ' ' + spinnerDonutClassName;
	if (outProps.progressBar)
		outProps.role = 'progressbar';
	delete outProps.progressBar;
	var elementType = outProps.elementType == 'span' ? 'span' : 'div';
	delete outProps.elementType;
	return  React.createElement(
		elementType, outProps, outProps.children
	);
}

// Breadcrumbs component.
function Breadcrumbs(props){
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
	return  React.createElement(
		'ul',outProps, childrenToRender
	);
}

// Close component.
function Close (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.children !== 'undefined') throw "Error: A 'Close' component must not have any children.";
	if (typeof outProps.elementType === 'undefined') outProps.elementType = 'span';
	if (typeof outProps.className === 'undefined')
		outProps.className =  closeClassName;
	else
		outProps.className += ' ' + closeClassName;
	var elementType = outProps.elementType == 'span' ? 'span' : 'div';
	delete outProps.elementType;
	return  React.createElement(
		elementType, outProps, outProps.children
	);
}
