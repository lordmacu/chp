import React, {Component} from 'react';
import DonutChart from 'react-donut-chart';

export default class Donut extends Component {

    render() {
        return (
            <div className="donut-position">
                <DonutChart
                
                    innerRadius={0.2}
                    data={[
                    {
                        label: "",
                        value: this.props.data
                    }, {
                        label: "",
                        value: this.props.maxvalue - this.props.data,
                        isEmpty: true
                    }
                ]}/>
            </div>
        )
    }
}