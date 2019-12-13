import React, {Component} from 'react';
import DonutChart from 'react-donut-chart';

export default class Donut extends Component {

    render() {
        return (
            <div className="col-12">
                <DonutChart

                    emptyOffset={0.4}
                    innerRadius={0.5}
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