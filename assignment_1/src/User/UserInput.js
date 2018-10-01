import React from 'react';

const UserInput = (props) => {
	
	const style = {
		border: '5px solid green'
	};
	
	return (
	 <div>
	 	<input type="text" onChange={props.updateName} defaultValue={props.name} style={style}></input>
	 </div>
	)
}

export default UserInput;