import React from 'react';
import '../App.css';

const UserOutput = (props) => {
	
	const style	= {
		color: 'red'
	}
	
	return (
		<div>
			<p className="UserOutput">Now that we know who you are, I know who I am - <span style={style}>{props.name}</span>. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
			<p className="UserOutput">Look, just because I don't be givin' no man a foot massage don't make it right for <span style={style}>{props.name}</span> to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
		</div>
	)
}

export default UserOutput;