import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';


export  default class Donut extends Component{
  
  render(){
    return(
      <div className="donut-position">

        {(this.props.data * 100)/this.props.maxvalue} { this.props.data}  { this.props.maxvalue}
       <DonutChart
    data={[{
        
        value:  this.props.data
    },
     
    {
        
        value: (this.props.data * 100)/this.props.maxvalue,
        isEmpty: true  
    },
    ]}
     />
      </div>
    )
  }
}

