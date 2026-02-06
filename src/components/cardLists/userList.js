import React from 'react';
import userCard from './uCard';

const userList = ({users}) => {
	const userComponent =users.map((user, i) => {
		return (<userCard 
			id={users[i].id}
			key={users[i].id}
			email={users[i].email}
			/>
		);
	})
	return (
		<div>
			{userComponent}
		</div>
	);
}

export default userList