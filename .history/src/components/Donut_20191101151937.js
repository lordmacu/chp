import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';


export  default class Donut extends Component{
  
  render(){
    return(
      <div>
       <DonutChart
    data={[{
        label: 'Give you up',
        value: 30
    },
    {label: 'lo',
    value: 30
  },
  {label: 'id',
  value: 30
},
    {
        label: '',
        value: 75,
        isEmpty: true
    }
    
},
    ]} />
      </div>
    )
  }
}

