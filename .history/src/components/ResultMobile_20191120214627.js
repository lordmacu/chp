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
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-2 pt-2 pb-2 mr-3 font-Titillium-Web">
                                    <p>RESULTADO:</p>
                                </div>
                                <div className="col-5 pl-0">
                                    <div class="btn-group">
                                        <button
                                            type="button"
                                            class="btn font-Titillium-Web"
                                            data-toggle="dropdown"
                                            aria-expanded="false">CON CONTRATO</button>
                                        <button
                                            type="button"
                                            class="btn dropdown-toggle dropdown-toggle-split pt-1 pl-0 arrow"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                            <a
                                                class="dropdown-item"
                                                onClick={(e) => this.filterPlanByKey("messages", 1, e)}
                                                href="#">Prepago (68) $0/recarga</a>
                                            <a
                                                class="dropdown-item"
                                                onClick={(e) => this.getAllResults("minutos", 1, e)}
                                                href="#">SinContrato (4) $349/recarga</a>
                                            <a
                                                class="dropdown-item"
                                                onClick={(e) => this.filterPlanByKey("internet", 2, e)}
                                                href="#">Contrato (28) $200/recarga</a>
                                            <a class="dropdown-item" onClick={(e) => this.clearAllResults(e)} href="#">Prepago (28) $200/recarga</a>

                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <p>a</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <p>a</p>
                                </div>
                                <div className="col-6">
                                    <p>a</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 shadow-row">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-4">
                                    <img alt=" " className="imga-mobile" src={this.props.item.image}/>
                                </div>
                                <div className="col-3">
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
                                <div className="col-12 pt-2 text-center">
                                    <img className="img-arrow-mobile" src="../imagen/arrow-mobile.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 ml-3">
                            <div className="row">
                                <div className="col-4 col-4 pl-0 pr-0">
                                    <p className="mb-0 p-font">
                                        <i className="fa fa-check mr-1"></i>Whatsapp<span>
                                            Ilimitados</span>
                                    </p>
                                    <p className="mb-0 p-font">
                                        <i className="fa fa-check mr-1"></i>Llamadas Claro<span>
                                            Ilimitados</span>
                                    </p>
                                </div>
                                <div className="col-4 col-4 pl-0 pr-0">
                                    <p className="mb-0 p-font">
                                        <i className="fa fa-check mr-1"></i>SMS SMS
                                        <span>(50 grátis)</span>
                                    </p>
                                    <p className="mb-0 p-font">
                                        <i className="fa fa-check mr-1"></i>
                                        <span>$50</span>
                                        Saldo de regalo</p>
                                </div>
                                <div className="col-4 col-4 pl-0 pr-0">
                                    <p className="mb-0 p-font">
                                        <i className="fa fa-check mr-1"></i>SMS SMS
                                        <span>(50 grátis)</span>
                                    </p>
                                    <p className="mb-0 p-font">
                                        <i className="fa fa-check mr-1"></i>
                                        <span>$50</span>
                                        Saldo de regalo</p>

                                </div>
                                <div className="col-12 line-btn-item"></div>
                            </div>

                        </div>
                        <div className="col-sm-12 mt-4">
                            <div className="row">
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-12 donut-left">
                                            <Donut data={this.props.item.internet} maxvalue={15360}/>
                                        </div>
                                        <div className="col-lg-12 sutitles-donut">
                                            <span className="font-weight">{this.calculateInternetValue(15360, this.props.item.internet)}</span>
                                            <p>Datos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-12 donut-right">
                                            <Donut data={this.props.item.messages} maxvalue={2000}/>
                                        </div>
                                        <div className="col-12 sutitles-donut ml-lg-3">
                                            <span className="font-weight">{this.props.item.messages}</span>
                                            <p className="mb-0">Minutos</p>
                                            <p>llamadas</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <img className="item-clock" src="../imagen/clock.png"/></div>
                                        <div className="col-12 sutitles-clock ml-lg-3">
                                            <span className="font-weight">{this.props.item.messages}</span>
                                            <p className="mb-0">Minutos</p>
                                            <p>llamadas</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-12 text-center pt-3">
                            <p className="item-font-result">MÁS DETALLES
                                <img className="arrow-rigth-result" src="../imagen/arrow-right.png"/></p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default SectionResultMobile;