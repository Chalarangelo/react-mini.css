import React from 'react';
import generateUniqueId from './util/idGenerator';


/*
<input type="radio" name="tab-group" id="tab1" checked aria-hidden="true">
  <label for="tab1" aria-hidden="true">Tab 1</label>
  <div>
    <h3>Tab 1</h3>
    <p>This is the first tab's content.</p>
  </div>
	*/

export default class Tabs extends React.Component {
	constructor(props) {
		super(props);
		var state = {
			group: 'tab_group_' + generateUniqueId(),
			tabs : []
		}
		this.props.tabs.forEach(function(propTab){
			var tab = propTab;
			tab.id = 'tab_' + generateUniqueId();
			state.tabs.push(tab);
		});
		this.state = state;
	}

	render() {
			// return (
			// 	<div className="tabs">
			//
			// 	</div>
			// );
			var kids = [];
			var group = this.state.group;
			this.state.tabs.forEach(function(tab){
				kids.push(React.createElement('input',{type: 'radio', name : group, id : tab.id, defaultChecked : true, 'aria-hidden': true}));
				kids.push(React.createElement('label',{htmlFor : tab.id, 'aria-hidden': true},tab.labelText));
				kids.push(React.createElement('div',{},tab.children));
			});
			return React.createElement('div',{className : 'tabs'},kids);
	}
	// this.state.tabs.forEach(function(tab){
	// 	<input type="radio" name={this.state.group} id={tab.id} defaultChecked aria-hidden="true" />
	// 	<label htmlFor={tab.id} aria-hidden="true">{tab.labelText}</label>
	// 	<div>
	// 		{tab.children}
	// 	</div>
	// }
	// render () {
	// 	return (
	// 		<div className="tabs">
	// 		  <input type="radio" name="tab-group" id="tab1" defaultChecked aria-hidden="true"/>
	// 		  <label htmlFor="tab1" aria-hidden="true">Tab 1</label>
	// 		  <div>
	// 		    <h3>Tab 1</h3>
	// 		    <p>This is the first tab's content.</p>
	// 		  </div>
	// 		  <input type="radio" name="tab-group" id="tab2" aria-hidden="true"/>
	// 		  <label htmlFor="tab2" aria-hidden="true">Tab 2</label>
	// 		  <div>
	// 		    <h3>Tab 2</h3>
	// 		    <p>This is the second tab's content.</p>
	// 		  </div>
	// 		  <input type="radio" name="tab-group" id="tab3" aria-hidden="true"/>
	// 		  <label htmlFor="tab3" aria-hidden="true">Tab 3</label>
	// 		  <div>
	// 		    <h3>Tab 3</h3>
	// 		    <p>This is the third tab's content.</p>
	// 		  </div>
	// 		</div>
	// 	);
	// }
}
