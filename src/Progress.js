import React from 'react';

module.exports = {
	// Module constants (change according to your flavor file)
	const PROGRESS_MAX_VALUE = 1000;
	// Progress component.
	class Progress extends React.Component {
		// Progress allows for a lot of versatility with how the value is provided,
		// as well as to the maximum value used for the progress bar.
		render() {
			var progressProps = Object.assign({},this.props);
			var isPercentage = false;
			if (/^\d+(\.\d+)?%$/.test(progressProps.value)) {
				progressProps.value = progressProps.value.slice(0, -1);
				isPercentage = true;
			}
			if(!isPercentage && parseInt(progressProps.value) >= parseInt(this.props.max)){
				console.log(this.props.value+" >= "+this.props.max);
				throw "The 'value' property of a progress element must be less or equal to its 'max' property.";
				return;
			}
			if(progressProps.max != PROGRESS_MAX_VALUE){
				progressProps.max = PROGRESS_MAX_VALUE;
				if (isPercentage)
					progressProps.value = progressProps.value/100 * PROGRESS_MAX_VALUE;
				else {
					progressProps.value = (PROGRESS_MAX_VALUE / this.props.max) * progressProps.value;
				}
			}
			else if (isPercentage)
				progressProps.value = progressProps.value/100 * PROGRESS_MAX_VALUE;
			return React.createElement('progress', progressProps, progressProps.children);
		}
	}
	// Default props for the Tabs component.
	Progress.defaultProps = {
		max: PROGRESS_MAX_VALUE,
		value: 0
	};
}
