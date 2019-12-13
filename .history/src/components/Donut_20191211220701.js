import React, {Component} from 'react';
import DonutChart from 'react-donut-chart';

export default class Donut extends Component {

    render() {
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
                        value: this.props.maxvalue>parseInt(this.props.data) ?  this.props.maxvalue - parseInt(this.props.data) : 1,
                        isEmpty: true
                    }
                ]}/>
            </div>
        )
    }
}