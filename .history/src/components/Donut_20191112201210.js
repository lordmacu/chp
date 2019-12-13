import React, {Component} from 'react';
import DonutChart from 'react-donut-chart';

export default class Donut extends Component {

    render() {
        return (
            <div className="donut-position">
                <DonutChart
                    data={[
                    {
                        label: "",
                        isEmpty: true,
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