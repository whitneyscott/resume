import React from 'react';

const userCard = (props) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}
export default userCard;