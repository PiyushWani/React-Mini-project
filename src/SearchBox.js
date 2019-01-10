import React from 'react';

export const SearchBox = ({searchChange}) =>
	{ return(
		<div className="tc">
			<input 
				className="pa3 ba b--green bg-lightest-blue"
				type="search" 
				name="searchBox" 
				placeholder="Search for Robot Names" 
				onChange={searchChange}	
			/>

		</div>
		)};