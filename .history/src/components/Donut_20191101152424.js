import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';


export  default class Donut extends Component{
  
  render(){
    return(
      <div>
       <DonutChart
    data={[{
        label: 'Give you up',
        value: 65
    },
     
    {
        label: 'hjjh',
        value: 100,
        isEmpty: true  
    },
    ]} />
      </div>
    )
  }
}

