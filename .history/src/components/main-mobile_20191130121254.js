import React, {Component} from 'react';
import Donut from './Donut';



class SectionResultMainMobile extends Component {

    

  
 
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
                                <div className="col-12">
                                    <img alt=" " className="imga-mobile"/>
                                </div>
                                <div className="col-12">
                                    <p className="p-phone-selector">
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p className=" mb-0">
                                        <b className="item-mes mr-2">$</b>
                                        <span className="font-size-45">0</span>
                                        <b className="item-mes">/mes</b>
                                    </p>
                                </div>
                                <div className="col-12 pt-2 text-center">
                                    <img alt=" " className="img-arrow-mobile" src="../imagen/arrow-mobile.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 mt-4">
                            <div className="row">
                                <div className="col-6 text-right">
                                    <div className="row">
                                        <div className="col-lg-12 donut-left">
                                            <Donut data={this.props.internet} maxvalue={15360}/>
                                            <span className="font-weight">{this.calculateInternetValue(15360, this.props.internet)}</span>
                                            <p>Datos</p>
                                        </div>
                                        <div className="col-lg-12 sutitles-donut">
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="row">
                                        <div className="col-12 donut-right">
                                            <Donut data={this.props.messages} maxvalue={2000}/>
                                        </div>
                                        <div className="col-12 sutitles-donut ml-lg-3">
                                            <span className="font-weight">{this.props.messages}</span>
                                            <p className="mb-0">Minutos</p>
                                            <p>llamadas</p>
                                        </div>
                                    </div>
                                </div>
                         

                            </div>
                        </div>
                        <div className="col-sm-12 mt-4">
                            <div className="row">
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-lg-12 donut-left">
                                            <Donut data={this.props.internet} maxvalue={15360}/>
                                        </div>
                                        <div className="col-lg-12 sutitles-donut">
                                            <span className="font-weight">{this.calculateInternetValue(15360, this.props.internet)}</span>
                                            <p>Datos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-12 donut-right">
                                            <Donut data={this.props.messages} maxvalue={2000}/>
                                        </div>
                                        <div className="col-12 sutitles-donut ml-lg-3">
                                            <span className="font-weight">{this.props.messages}</span>
                                            <p className="mb-0">Minutos</p>
                                            <p>llamadas</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <img alt=" " className="item-clock" src="../imagen/clock.png"/></div>
                                        <div className="col-12 sutitles-clock ml-lg-3">
                                            <span className="font-weight">{this.props.messages}</span>
                                            <p className="mb-0">Minutos</p>
                                            <p>llamadas</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-12 text-center pt-3">
                            <p className="item-font-result">MÁS DETALLES
                                <img alt=" " className="arrow-rigth-result" src="../imagen/arrow-right.png"/></p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default SectionResultMainMobile;