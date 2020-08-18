import React,{Component} from 'react';
import './style.css';
export class Launch extends Component{

render(){

	return(<div className="launch">
		<div className="img">
			<img src={this.props.img} />
		</div>
		<div className="data">
			<p className="ttl">{this.props.title}</p>
			<p className="date">{this.props.date}</p>
			<p className="desc">{this.props.desc}</p>
		</div>
		
		
	</div>)
}
}
