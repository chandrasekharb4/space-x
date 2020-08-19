import React,{Component} from 'react';
import {Launch} from '../launch/launch.js';
import axios from 'axios';
class LaunchList extends Component{
state={
launchs:{},
limit:105
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

loadMore = () =>{
	this.setState({limit:this.state.limit+5});
}
displayLaunchs = () =>{

const z = Object.keys(this.state.launchs).slice(0,this.state.limit).map( (x,i) =>{
const img = this.state.launchs[x].links.flickr_images.length===0 ? "https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg" : this.state.launchs[x].links.flickr_images[0]; 
		  		return (<Launch key={"launch"+i} title={this.state.launchs[x].mission_name} img={img} date={this.state.launchs[x].launch_date_local} desc={this.state.launchs[x].details} />)
		  		
		  	}) 
		  	return z;
}


render(){

	return(<div>
		{this.displayLaunchs()}
		<button onClick={this.loadMore}>More</button>
	</div>)
}
}

export default LaunchList;
