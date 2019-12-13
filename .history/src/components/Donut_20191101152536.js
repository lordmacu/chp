import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';


export  default class Donut extends Component{
  
  render(){
    return(
      <div>
       <DonutChart
    data={[{
        label: 'Give you up',
        value: 100
    },
     
    {
        label: 'hjjh',
        value: 1,
        isEmpty: true  
    },
    ]} />
      </div>
    )
  }
}

