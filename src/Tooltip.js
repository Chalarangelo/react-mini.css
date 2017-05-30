import React from 'react';

module.exports = {
	// Module constants (change according to your flavor file)
	const TOOLTIP_CLASS_NAME = 'tooltip';
	const TOOLTIP_BOTTOM_CLASS_NAME = 'bottom';
	// Tooltip component.
	class Tooltip extends React.Component {
		render() {
			if (typeof this.props.tooltipText === 'undefined'){
				throw "The 'Tooltip' component's 'tooltipText' property is mandatory. Please specify a value.";
				return;
			}
			var tooltipProps = Object.assign({},this.props);
			if (typeof tooltipProps.className === 'undefined')
				tooltipProps.className = (this.props.bottom) ? (TOOLTIP_CLASS_NAME + ' ' + TOOLTIP_BOTTOM_CLASS_NAME) : TOOLTIP_CLASS_NAME;
			else
				tooltipProps.className += (this.props.bottom) ? (' ' + TOOLTIP_CLASS_NAME + ' ' + TOOLTIP_BOTTOM_CLASS_NAME) : TOOLTIP_CLASS_NAME;
			tooltipProps['aria-label'] = tooltipProps.tooltipText;
			delete tooltipProps.tooltipText;
			delete tooltipProps.bottom;
			return React.createElement('span',tooltipProps, tooltipProps.children);
		}
	}
	// Default props for the Tooltip component.
	Tooltip.defaultProps = {
		bottom: false
	};
}
