import React from 'react';

import {Link} from "react-router-dom";
import Donut from './Donut';

class SectionSlider extends React.Component {
    internetRef = React.createRef();
    minutosRef = React.createRef();
    smsRef = React.createRef();
    redesRef = React.createRef();
    estadoRef = React.createRef();
    compañiaRef = React.createRef();

    filterPhone = (e) => {
        e.preventDefault();

        console.log()
        const infoFilter = {
            internetRef: this.state.stepsInternet[this.state.internetValue],
            minutosRef: this.state.stepsMinutos[this.state.minutesValue],
            smsRef: this.state.stepsSms[this.state.smsValue],
            redes: this.redesRef.current.value,
            estado: this.estadoRef.current.value,
            compañia: this.compañiaRef.current.value

        }
        console.log(infoFilter)
    }

    constructor(props) {
        super(props);

        this.state = {
            results: [
                {
                    id: 1,
                    image: ('./imagen/logo-result.png'),
                    internet: 4800,
                    minutos: 200,
                    messages: 1600,
                    name: "PLAN CONTROL 1"
                }, {
                    id: 2,
                    internet: 6000,
                    minutos: 200,
                    messages: 1400,
                    name: "Paquete Portabilidad",
                    image: ('./imagen/movi.jpeg')

                }, {
                    id: 3,
                    internet: 2000,
                    minutos: 200,
                    messages: 2000,
                    name: "Paquete $10 Cierto",
                    image: ('./imagen/at&t.png')
                }, {
                    id: 4,
                    internet: 3100,
                    minutos: 200,
                    messages: 1200,
                    name: "Plan 1 Díalo",
                    image: ('./imagen/Cierto-l.png  ')

                }
            ],
            temporalResults: [],
            networkValue: 0,
            internetValue: 0,
            minutesValue: 0,
            smsValue: 0,
            stepsInternet: [
                "0MB",
                "50MB",
                "100MB",
                "200MB",
                "500MB",
                "1GB",
                "2GB",
                "3GB",
                "5GB",
                "10GB",
                "15GB",
                "Ilimitado"
            ],
            stepsInternetValue: [
                "0",
                "50",
                "100",
                "200",
                "500",
                "1024",
                "2048",
                "3072",
                "5120",
                "10240",
                "15360",
                "Ilimitado"
            ],
            stepsMinutos: [
                "0",
                "100",
                "200",
                "300",
                "400",
                "500",
                "1000",
                "1500",
                "2000",
                "Ilimitado"
            ],
            stepsMessagesValue: [
                "0",
                " 50",
                "100",
                "250",
                "500",
                "750",
                "1,000",
                "1,500",
                "2,000",
                "Ilimitado"
            ],
            stepsSms: [
                " 0",
                " 50",
                "100",
                "250",
                "500",
                "750",
                "1,000",
                "1,500",
                "2,000",
                "Ilimitado"
            ],
            stepsMinutosValue: [
                " 0",
                " 50",
                "100",
                "250",
                "500",
                "750",
                "1,000",
                "1,500",
                "2,000",
                "Ilimitado"
            ]
        }

        this.filterPlanByKey = this
            .filterPlanByKey
            .bind(this);
        this.getAllResults = this
            .getAllResults
            .bind(this);
        this.clearAllResults = this
            .clearAllResults
            .bind(this);

        //this.setState({temporalResults:this.state.results})

        this.state.temporalResults = this.state.results;

    }

    getAllResults() {
        this.setState({temporalResults: this.state.results})
    }

    clearAllResults() {
        this.setState({temporalResults: []})
    }

    //internet  40
    filterPlanByKey(propiedadABuscar, value) {
        //console.log("saqui ",this.state.results,key)

        var resultsLocal = this.state.results;

        var internalArray = [];

        for (let index in resultsLocal) { //4

            for (let propiedadObjetoLocal in resultsLocal[index]) {

                let objecto = resultsLocal[index];

                let valueProperty = objecto[propiedadObjetoLocal];

                if (propiedadObjetoLocal === propiedadABuscar) {

                    if (valueProperty >= value) {
                        internalArray.push(objecto);
                    }
                    //  console.log(key,results[item][key]);
                }

            }
            // console.log(this.state.results[item]);
        }

        console.log(internalArray)

        this.setState({temporalResults: internalArray})

    }

    calculateInternet() {
        return this.state.stepsInternet[this.state.internetValue];
    }
    calculateStepInternet() {
        let stepInternet = 1;
        return stepInternet;
    }

    calculateMinutos() {
        return this.state.stepsMinutos[this.state.minutesValue];
    }
    calculateStepMinutos() {
        let stepMinutos = 1;
        return stepMinutos;
    }

    claculaSms() {
        return this.state.stepsSms[this.state.smsValue];
    }
    calculateSeptSms() {
        let stepSms = 1;
        return stepSms;
    }
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
            <form className="filter" onSubmit={this.filterPhone}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="row pt-3  border-main">
                                <div className="col-lg-1 mr-5 border-rigth">
                                    <div className="row">

                                        <div className="col-lg-6">
                                            <img alt=" " className="wisth-img" src="./imagen/phone-main.png"/>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-10">

                                    {this
                                        .state
                                        .results
                                        .map((item, key) => <div className="row display-on-in-desktop position-text pl-4">
                                            <div className="col-lg-12 pl-0">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <p className="p-phone-selector">{item.name}</p>
                                                    </div>
                                                    <div className="col-lg-6 pl-4">
                                                        <div className="off50">
                                                            (50%OFF)
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 text-center pl-5 ml-4">
                                                        <p className="position-price">PRECIO</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 text-left">
                                                <div className="row">
                                                    <div className="col-lg-12 mt-2 pl-0">
                                                        <div className="row">

                                                            <div className="col-lg-12">
                                                                <p className="mb-0 p-font">
                                                                    REGION:
                                                                    <span>
                                                                        <div className="btn-group btn-ordenar mb-0">
                                                                            <button
                                                                                type="button"
                                                                                className="btn font-Titillium-Web"
                                                                                aria-expanded="false"
                                                                                data-toggle="dropdown">ESTE</button>
                                                                            <button
                                                                                type="button"
                                                                                className="btn dropdown-toggle dropdown-toggle-split arrow-main"
                                                                                data-toggle="dropdown"
                                                                                aria-haspopup="true"
                                                                                aria-expanded="false">
                                                                                <span className="sr-only">Toggle Dropdown</span>
                                                                            </button>
                                                                            <div className="dropdown-menu">
                                                                                <a className="dropdown-item" href=" # ">Prepago (68) $0/recarga</a>
                                                                                <a className="dropdown-item" href=" # ">SinContrato (4) $349/recarga</a>
                                                                                <a className="dropdown-item" href=" # ">Contrato (28) $200/recarga</a>
                                                                                <a className="dropdown-item" href=" # ">Prepago (28) $200/recarga</a>
                                                                                <div className="dropdown-divider"></div>
                                                                                <a className="dropdown-item" href=" # ">Separated link</a>
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </p>
                                                                <p className="mb-0 p-font">
                                                                    CONTRATO:
                                                                    <span className="p-font-result">
                                                                        12 MESES</span>
                                                                </p>
                                                                <p className="mb-0 p-font">
                                                                    SALDO:
                                                                    <span className="p-font-result">
                                                                        $50.</span>
                                                                </p>
                                                                <p className="mb-0 p-font">
                                                                    COMPAÑÍA:
                                                                    <span className="p-font-result">
                                                                        CLARO</span>
                                                                </p>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="img-logo">
                                                                    <img alt=" " className="imga-mobile-2" src={item.image}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 text-center pl-0">
                                                <div className="row row-with-donut">
                                                    <div className="col-lg-12">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <p className="font-data">DATOS</p>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <p className="font-data">LLAMADAS CLARO</p>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <p className="font-data">LLAMADA OTROS</p>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <p className="font-data">SMS</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 donut-right">
                                                        <div className="row">

                                                            <div className="col-lg-12 position-svg-donut">
                                                                <Donut data={item.messages} maxvalue={2000}/>
                                                            </div>
                                                            <div className="col-lg-12 sutitles-donut">
                                                                <p className="font-weight mb-0">1GB</p>
                                                                <p className="font-weight mb-0">
                                                                    +
                                                                </p>
                                                                <p className="font-weight">WHATSAPP GRÁTIS</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 donut-right">
                                                        <div className="row">

                                                            <div className="col-lg-12 position-svg-donut">
                                                                <Donut data={item.messages} maxvalue={2000}/>
                                                            </div>
                                                            <div className="col-lg-12 sutitles-donut">
                                                                <p>
                                                                    <span className="font-weight">{this.calculateInternetValue(15360, item.internet)}</span>
                                                                </p>
                                                                <p className="subtitle-donut-main">A TODOS LOS CLARO</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 donut-right">
                                                        <div className="row">

                                                            <div className="col-lg-12 position-svg-donut">
                                                                <Donut data={item.messages} maxvalue={2000}/>
                                                            </div>
                                                            <div className="col-lg-12 sutitles-donut">
                                                                <p>
                                                                    <span className="font-weight">{this.calculateInternetValue(15360, item.internet)}</span>
                                                                </p>
                                                                <p className="subtitle-donut-main">A OTRAS COMPAÑÍAS</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 donut-right">
                                                        <div className="row">

                                                            <div className="col-lg-12 position-svg-donut">
                                                                <Donut data={item.messages} maxvalue={2000}/>
                                                            </div>
                                                            <div className="col-lg-12 sutitles-donut">
                                                                <p>
                                                                    <span className="font-weight">{this.calculateInternetValue(15360, item.internet)}</span>
                                                                </p>
                                                                <p className="subtitle-donut-main">A OTRAS COMPAÑÍAS</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="row pl-1">
                                                    <div className="col-lg-12 text-center">
                                                        <img className="economy" src="./imagen/economi.png"/>
                                                        <p className="font-size-price-main ">
                                                            <span className="font-simbol">$</span>
                                                            <span>0</span>
                                                            <span className="month-font">/mes</span>
                                                        </p>
                                                        <p className="after">antes<span>$ 350</span>
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-12 ml-3">
                                                        <div className="border-main">
                                                            <Link to='/list'>
                                                                <button type="submit" href="/list" className="btn btn-danger mb-2 btns-maind">CONTRATAR</button>
                                                            </Link>
                                                            <button type="submit" href="/list" className="btn btn-primary btns-maind">COMPARTIR<i className="fa fa-share-alt"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>)}

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </form>
        );
    }
}

export default SectionSlider;