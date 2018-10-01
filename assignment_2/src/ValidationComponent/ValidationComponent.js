import React from 'react';

const ValidationComponent = (props) => {
	
	const validationMessage = props.textLength <= 5 ? "The text is too short!" : "The text is long enough. :)";

	return (
			<p>{validationMessage}</p>
	)
}

export default ValidationComponent;