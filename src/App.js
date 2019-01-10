import React, { Component } from 'react';
import Hello from './Hello';
import { SearchBox } from './SearchBox';
import { Cardlist } from './Cardlist';
import { Robots } from './Robots';


class App extends Component{

	constructor(){
		super();
		this.state = {Robots: Robots, searchField:'', pcheck:''}
	}
	
	onSearchChange = (event) => {
		this.setState({ searchField:event.target.value })
	}

	
	render(){
		const filteredRobots = this.state.Robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
			})
		console.log(filteredRobots)

		return(
			<div className="tc">
				<Hello greeting={"Ninja"}/>
				<SearchBox searchChange={this.onSearchChange}/>
				<Cardlist Robots={filteredRobots}/>
			</div>	
		)
	}
}
export default App;