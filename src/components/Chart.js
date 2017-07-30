import React, {Component} from 'react';


// Chart.js
import {Bar, Line, Pie} from 'react-chartjs-2';


export default class Chart extends Component{

	constructor(props){
		super(props);

		this.state = {
			chartData: props.chartData
		}
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right',
		location: 'City'
	}

	render(){

		return (
			<div className="chart">

				<br/>
				<h2>Bar chart</h2>
				<Bar
		          data={this.state.chartData}
		          options={{
		            title:{
		              display:this.props.displayTitle,
		              text:'Largest Cities In '+this.props.location,
		              fontSize:25
		            },
		            legend:{
		              display:this.props.displayLegend,
		              position:this.props.legendPosition
		            }
		          }}
		        />
		        	<br/>
		            <h2>Line chart</h2>

				    <Line
			          data={this.state.chartData}
			          options={{
			            title:{
			              display:this.props.displayTitle,
			              text:'Largest Cities In '+this.props.location,
			              fontSize:25
			            },
			            legend:{
			              display:this.props.displayLegend,
			              position:this.props.legendPosition
			            }
			          }}
			        />

			        <br/>
			        <h2>Pie chart</h2>
			        <Pie
			          data={this.state.chartData}
			          options={{
			            title:{
			              display:this.props.displayTitle,
			              text:'Largest Cities In '+this.props.location,
			              fontSize:25
			            },
			            legend:{
			              display:this.props.displayLegend,
			              position:this.props.legendPosition
			            }
			          }}
			        />

			</div>
		)
	}
}