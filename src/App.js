import CanvasJSReact from './canvasjs.react'
import { Component } from 'react';
import React from 'react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
	constructor(){
		super()
		this.state = {facebook : 440,
					  web : 320,
	                  reddit: 410,
                      twitter : 390,
	                  instagram:220     
                     }
        this.myRef = React.createRef();
	}
 getFilter() {
	var option = this.myRef.current.value
	if(option != "select"){
    let keys = Object.keys(this.state)
	console.log(this.state[keys[0]])
	for(let i=0;i<keys.length-1;i++){
		this.setState({ facebook : this.state[keys[i]].filter((obj) => Object.keys(obj).map(filObj => obj[filObj]).join().indexOf(option) > -1)})
	}
	}
 }
  componentDidMount() {

}
	render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Message count per source"
			},
			data: [{
				type: "pie",
				startAngle: 60,
				toolTipContent: "<b>{label}</b>: {y}",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}",
				dataPoints: [
					{ y: this.state.web, label: "Web" },
					{ y: this.state.facebook, label: "FaceBook" },
					{ y: this.state.reddit, label: "Reddit" },
					{ y: this.state.instagram, label: "Instagram" },
					{ y: this.state.twitter, label: "Twitter" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>

		);
	}
}

export default App