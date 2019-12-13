import React, {Component} from 'react';
import Donut from './Donut';

class SectionResultMobile extends Component {

    calculateInternetValue(maxvalue, value) {
        if (maxvalue <= value) {

            return "ilimitado"

        } else {

            if (value > 1024) {
                return (value / 1024).toFixed(1) + "GB"
            } else {
                return value + "MB"
            }

        }
    }

    calculateMensagesValue(maxvalue, value) {
        if (maxvalue >= value) {

            return "ilimitado"

        } else {
            return value
        }
    }

    render() {

        return (

            <div className="row display-on-in-mobile">
                <div className="col-lg-12 shadow-row">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4">a</div>
                                <div className="col-sm-4">a</div>
                                <div className="col-sm-4">a</div>
                            </div>
                        </div>
                        <div className="col-sm-12"></div>
                        <div className="col-sm-12"></div>
                        <div className="col-sm-12"></div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SectionResultMobile;