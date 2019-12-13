import React, {Component} from 'react';
import DonutChart from 'react-donut-chart';

export default class Donut extends Component {

    render() {

        if(this.props.maxvalue<parseInt(this.props.data)){
            var valueMax=1;
        }else if(this.props.maxvalue==parseInt(this.props.data)){
            var valueMax=1;
        }else{
            var valueMax=this.props.maxvalue - parseInt(this.props.data) 

        }


        console.log("---------");
        console.log(valueMax,parseInt(this.props.data));

        console.log(this.props.maxvalue,parseInt(this.props.data) )
        console.log("---------");

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