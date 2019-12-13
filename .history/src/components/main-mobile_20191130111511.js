import React, {Component} from 'react';
import Donut from './Donut';



class SectionResultMainMobile extends Component {

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
                    name: "UFONE"
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
                                    <img alt=" " className="img-arrow-mobile" src="../imagen/arrow-mobile.png"/>
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
                                            <img alt=" " className="item-clock" src="../imagen/clock.png"/></div>
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
                                <img alt=" " className="arrow-rigth-result" src="../imagen/arrow-right.png"/></p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default SectionResultMainMobile;