import React from 'react'
import Card from './Card'
export const Cardlist = ({ Robots }) => {
	return(
		<div>
		{	Robots.map((user, i) => {
				return  (
					<Card 
					key={i} 
					id={user.id} 
					name={user.name} 
					email={user.email} 
					/>
					);
			})
		}
		</div>
	);
}