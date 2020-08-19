import React,{Component} from 'react';
import {Launch} from '../launch/launch.js';
import axios from 'axios';
class LaunchList extends Component{
state={
launchs:{}
}
componentDidMount = () =>{
axios.get('https://api.spacexdata.com/v3/launches')

  .then((response) => {
    // handle success
     this.setState({launchs:response.data})
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

displayLaunchs = () =>{

const z = Object.keys(this.state.launchs).map( x =>{
		  		return (<Launch title="FalconSat" img="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg" date="2020-02-05" desc="Engine failure at 33 seconds and loss of vehicle"/>)
		  	}) 
		  	return z;
}


render(){

	return(<div>
		{this.displayLaunchs()}
	</div>)
}
}

export default LaunchList;
