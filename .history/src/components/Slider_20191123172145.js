import React from 'react';
import ReactSlider from 'react-slider';
import {Link} from "react-router-dom";

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

            networkValue: 0,
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
            stepsSms: [
                "50",
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

    render() {

        return (
            <form className="filter" onSubmit={this.filterPhone}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="row pt-3  border-main">
                                <div className="col-lg-5 border-rigth">
                                    <div className="row">
                                        <div className="col-lg-12 font-bold pb-4">
                                            Lorem?
                                        </div>
                                        <div className="col-lg-6">
                                            <img alt=" " src="./imagen/phone.png"/>
                                            <i className="fa fa-plus"></i>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                            <img alt=" " src="./imagen/phone.png"/>
                                            <i className="fa fa-plus"></i>
                                        </div>

                                
                              
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row ">
                                <div className="col-lg-12 pt-5">
                                    <div className="border-main border-bottom">
                                        <Link to='/list'>
                                            <button type="submit" href="/list" className="btn btn-primari">Buscar</button>
                                        </Link>
                                    </div>
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