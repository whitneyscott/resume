import React from 'react';
import uCard from './uCard';

const uCardList = ({users}) => {
	const ucardComponent =institutions.map((clients, i) => {
		return (<uCard 
			id={institutions[i].id}
			key={institutions[i].id}
			institution={institutions[i].institution}
			degree={institutions[i].degree}
			major={institutions[i].major}
			minor={institutions[i].minor}
			details={institutions[i].details}
			gradmo={institutions[i].gradmo}
			gradyr={institutions[i].gradyr}
			/>
		);
	})
	return (
		<div>
			{ucardComponent}
		</div>
	);
}

export default uCardList