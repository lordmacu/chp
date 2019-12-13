import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';


export  default class Donut extends Component{
  
  render(){
    return(
      <div className="donut-position">
       <DonutChart
    data={[{
        
        value: {messages:20,}
    },
     
    {
        
        value: 20,
        isEmpty: true  
    },
    ]} />
      </div>
    )
  }
}

