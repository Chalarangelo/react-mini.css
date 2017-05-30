import React from 'react';
import generateUniqueId from './util/idGenerator';

module.exports = {
	// Module constants (change according to your flavor file)
	const TABS_CLASS_NAME = 'tabs';
	const TABS_STACKED_CLASS_NAME = 'stacked';
	// Technically speaking, the Tab is a non-component, meaning it should not be
	// rendered on its own. It depends on the Tabs component for proper rendering.
	class Tab extends React.Component {
		render() {
			var tabProps = Object.assign({}, this.props);
			delete tabProps.tabTitle;
			return React.createElement('div', this.props, this.props.children);
		}
	};
	// Default props for the Tab component.
	Tab.defaultProps = {
		checked : false,
		defaultChecked : false,
		tabTitle : 'Tab'
	};
	// Tabs component.
	class Tabs extends React.Component {
		// The list of children is verified and passed into the component's state.
		constructor(props) {
			super(props);
			var state = {
				group: 'tab_group_' + generateUniqueId(),
				children : []
			}
			var tempProps = (Array.isArray(this.props.children)) ? this.props.children : [this.props.children];
			tempProps.forEach(
				function(child){
					if (!child instanceof Tab){
						 throw "All children of a 'Tabs' component need to be of type 'Tab'. Expected type: 'Tab' Found type: '"+child.class+"'";
						 return;
					}
					var tab = Object.assign({}, child);
					tab.internalId = 'tab_' + generateUniqueId();
					state.children.push(tab);
				}
			);
			this.state = state;
		}
		// Rendering consumes the required props and children from state to
		// generate the tabs.
		render(){
			var childrenToRender = [];
			var groupName = this.state.group;
			var tabbingType = (this.props.tabbingType == 'checkbox' && this.props.stacked) ? 'checkbox' : 'radio';
			var hasChecked = false;
			this.state.children.forEach(function(tab) {
				if (tab.props.checked || tab.props.defaultChecked) hasChecked = true;
				childrenToRender.push(
					React.createElement('input', {
							type: tabbingType,
							name : groupName,
							key : tab.internalId+'_input',
							id : tab.internalId,
							defaultChecked : (tab.props.checked || tab.props.defaultChecked) ? true : false,
							'aria-hidden': 'true'})
				);
				childrenToRender.push(
					React.createElement('label', {
							'htmlFor' : tab.internalId,
							key : tab.internalId+'_label',
							'aria-hidden' : 'true'
						}, tab.props.tabTitle)
				);
				var tabProps = Object.assign({}, tab.props);
				tabProps.key = tab.internalId+'_content';
				delete tabProps.tabTitle;
				childrenToRender.push(React.createElement('div',tabProps,tab.props.children));
			});
			if (!hasChecked)
				childrenToRender[0] = React.createElement('input', {
					type: tabbingType,
					name : groupName,
					id : this.state.children[0].internalId,
					defaultChecked : true,
					'aria-hidden':'true'
				});
			var tabsProps = Object.assign({}, this.props);
			if (typeof tabsProps.className === 'undefined')
				tabsProps.className = (this.props.stacked) ? (TABS_CLASS_NAME + ' ' + TABS_STACKED_CLASS_NAME) : TABS_CLASS_NAME;
			else
				tabsProps.className += (this.props.stacked) ? (' ' + TABS_CLASS_NAME + ' ' + TABS_STACKED_CLASS_NAME) : TABS_CLASS_NAME;
			delete tabsProps.stacked;
			delete tabsProps.tabbingType;
			return React.createElement('div',tabsProps,childrenToRender);
		}
		// Default props for the Tabs component.
		Tabs.defaultProps = {
			stacked : false,
			tabbingType	: 'radio'
		};
	}
}
