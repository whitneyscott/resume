import React from 'react';

const uCard = (props) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{props.institution}</h2>
				<p>{props.degree}</p>
			</div>
		</div>
	);
}
export default uCard;