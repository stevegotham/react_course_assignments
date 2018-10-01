import React from 'react';

const CharComponent = (props) => {
	
	return (
		<p onClick={props.clicked} className="Character">
			{props.char}
		</p>
	)
}

export default CharComponent;