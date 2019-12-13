import React, {Component} from 'react';
import DonutChart from 'react-donut-chart';

export default class Donut extends Component {

    render() {

        if(this.props.maxvalue>parseInt(this.props.data)){
            var valueMax=this.props.maxvalue - parseInt(this.props.data) 
        }else if(this.props.maxvalue==parseInt(this.props.data)){
            var valueMax=1;
        }else{
            var valueMax=this.props.maxvalue;
        }
        return (
            <div className="donut-position">
                <DonutChart

                    emptyOffset={0.4}
                    innerRadius={0.5}
                    data={[
                    {
                        label: "",
                        value: parseInt(this.props.data)
                    }, {
                        label: "",
                        value:valueMax,
                        isEmpty: true
                    }
                ]}/>
            </div>
        )
    }
}