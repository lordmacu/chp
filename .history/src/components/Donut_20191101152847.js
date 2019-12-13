import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';


export  default class Donut extends Component{
  
  render(){
    return(
      <div>
       <DonutChart
    data={[{
        
        value: 100
    },
     
    {
        
        value: 1,
        isEmpty: true  
    },
    ]} />
      </div>
    )
  }
}

