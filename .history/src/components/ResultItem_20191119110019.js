import React, {Component} from 'react';
import Donut from './Donut';

class SectionResulyItem extends Component {

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
            <div className="row">
                <div className="col-lg-4 text-left">
                    <div className="row">
                        <div className="col-lg-5 text-center mt-3">
                            <p className="p-font">
                                Compañia</p>
                            <div className="img-logo">
                                <img alt=" " className="imga-mobile" src={this.props.item.image}/>
                            </div>

                        </div>
                        <div className="col-lg-7 mt-2 pl-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="p-phone-selector">{this.props.item.name}
                                    </p>
                                </div>

                                <div className="col-lg-12 mt-lg-2">
                                <p className="mb-0 p-font">
                                        <i className="fa fa-check mr-2"></i>Minutos
                                        <span>Ilimitados</span>
                                    </p>
                                    <p className="mb-0 p-font">
                                        <i className="fa fa-check mr-2"></i>Minutos
                                        <span>Ilimitados</span>
                                    </p>
                                    <p className="mb-0 p-font">
                                        <i className="fa fa-check mr-2"></i>SMS<span>00</span>
                                    </p>
                                    <p className="mb-0 p-font">
                                        <i className="fa fa-check mr-2"></i>Datos Ilimitados<span>00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-center">
                    <div className="row">
                        <div className="col-lg-4 donut-left">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Donut data={this.props.item.messages} maxvalue={2000}/>
                                </div>
                                <div className="col-lg-12 sutitles-donut">
                                    <span className="font-weight">{this.props.item.messages}</span>
                                    <p>Minutos</p>
                                    <small className="text-muted-dounut">{this.calculateMensagesValue(2000, this.props.item.messages)}
                                        Mensajes</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 donut-right">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Donut data={this.props.item.internet} maxvalue={15360}/>
                                </div>
                                <div className="col-lg-12 sutitles-donut">

                                    <span className="font-weight">{this.calculateInternetValue(15360, this.props.item.internet)}</span>

                                    <p>Datos</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 donut-right year-position">
                            <div className="row">
                                <div className="col-lg-12 item-year">
                                    <p>Datos</p>
                                </div>
                                <div className="col-lg-12 item-contrat">
                                    <p>Minutos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 position-price-btn">
                    <div className="row">
                        <div className="col-lg-6 text-center">
                            <p className="font-size-45 mb-0">$0</p>
                        </div>
                        <div className="col-lg-6 border-btn">
                            <button type="btn" className="btn btn-primary-donut">Ver Detalle</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default SectionResulyItem;