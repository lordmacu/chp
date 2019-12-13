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
                                <div className="col-4">
                                    <img alt=" " className="imga-mobile" src={this.props.item.image}/>
                                </div>
                                <div className="col-4">
                                    <p className="p-phone-selector">{this.props.item.name}
                                    </p>
                                </div>
                                <div className="col-4">
                                    <p className=" mb-0">
                                        <b className="item-mes mr-2">$</b>
                                        <span className="font-size-45">0</span>
                                        <b className="item-mes">/mes</b>
                                    </p>
                                </div>
                                <div className="col-12 text-center">
                                    <p>a</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-4 col-4 pl-0 pr-0">
                                    <p className="mb-0 p-font"> <i className="fa fa-check mr-2"></i>Whatsapp<span> Ilimitados</span> </p>
                                    <p className="mb-0 p-font"><i className="fa fa-check mr-2"></i>Llamadas Claro<span> Ilimitados</span> </p>
                                </div>
                                <div className="col-4 col-4 pl-0 pr-0">
                                    <p className="mb-0 p-font"><i className="fa fa-check mr-2"></i>SMS SMS  <span>(50 grátis)</span></p>
                                    <p className="mb-0 p-font"><i className="fa fa-check mr-2"></i><span>$50</span> Saldo de regalo</p>
                                </div>
                                <div className="col-4 col-4 pl-0 pr-0">
                                    <p className="mb-0 p-font"><i className="fa fa-check mr-2"></i>SMS SMS  <span>(50 grátis)</span></p>
                                    <p className="mb-0 p-font"><i className="fa fa-check mr-2"></i><span>$50</span> Saldo de regalo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-4">a</div>
                                <div className="col-4">a</div>
                                <div className="col-4">a</div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <p>a</p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default SectionResultMobile;