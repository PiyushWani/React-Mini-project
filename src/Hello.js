import React from 'react';
import './Hello.css';

/*class Hello extends Component{
	render(){
		
		return( 
		<div className='f1 tc'>
		<h1> Hello World</h1>
		<p>{this.props.greeting}</p>
		</div>
		);
	}
}*/

const Hello =  ({ greeting }) => {

	return(
		<div className='f1 tc'>
		<h1 className='bg-light-green'>ROBO-FRIENDS</h1>		
		</div>
	);
}

export default Hello;