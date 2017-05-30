import React from 'react';
import generateUniqueId from './util/idGenerator';

class Tab extends React.Component {
	render() {
		return React.createElement('div',{},this.props.children);
	}
}

export default class Tabs extends React.Component {
	constructor(props) {
		super(props);
		var state = {
			group: 'tab_group_' + generateUniqueId(),
			children : []
		}
		if (!Array.isArray(this.props.children))
			var tempProps = [this.props.children];
		else
			var tempProps = this.props.children;
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

	render(){
		var childrenToRender = [];
		var groupName = this.state.group;
		var hasChecked = false;
		this.state.children.forEach(function(tab){
			if (tab.props.checked) {
				hasChecked = true;
			}
			childrenToRender.push(
				React.createElement(
					'input',{
						type: 'radio',
						name : groupName,
						id : tab.internalId,
						defaultChecked : (tab.props.checked) ? true : false,
						'aria-hidden': 'true'}
				)
			);
			childrenToRender.push(
				React.createElement(
					'label',{
						'htmlFor' : tab.internalId,
						'aria-hidden' : 'true'
					},
					'demo-tab'+tab.internalId
				)
			);
			childrenToRender.push(React.createElement('div',{},tab.props.children));
		});
		if (!hasChecked)
			childrenToRender[0] = React.createElement(
				'input', {
					type: 'radio',
					name : groupName,
					id : this.state.children[0].internalId,
					defaultChecked : true,
					'aria-hidden':'true'
				}
			);
		return React.createElement('div',{'className' : 'tabs'},childrenToRender);
	}
}
