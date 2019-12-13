import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';


export  default class Donut extends Component{
  
  render(){
    return(
      <div className="donut-position">
       <DonutChart
    data={[{
        
        value:  30
    },
     
    {
        
        value: 70,
        isEmpty: true  
    },
    ]}
     />
      </div>
    )
  }
}

