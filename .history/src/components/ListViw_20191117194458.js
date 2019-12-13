import React from 'react';
import ReactSlider from 'react-slider';

class SectionList extends React.Component {

    internetRef = React.createRef();
    minutosRef = React.createRef();
    smsRef = React.createRef();
    typeRef = React.createRef();

    filterPhone = (e) => {
        e.preventDefault();

        console.log()
        const infoFilter = {
            internetRef: this.state.stepsInternet[this.state.internetValue],
            minutosRef: this.state.stepsMinutos[this.state.minutesValue],
            smsRef: this.state.stepsSms[this.state.smsValue],
            type: this.typeRef.current.value

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
    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <p>elige tu plan</p>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <div className="col-12">
                                    <div class="dropdown">
                                        <div
                                            class="dropdown-toggle curso-pointer "
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span className="pr-1 rest-font">OPCIONES SIN EQUIPO
                                            </span>
                                        </div>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-lg-5 col-sm-12">
                                            <form className="filter-list" onSubmit={this.filterPhone}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <p className="subtitle mt-0">INTERNET DATOS:
                                                                    <b className="rest-font">{this.calculateInternet()}</b>
                                                                </p>
                                                                <div className="">
                                                                    <ReactSlider
                                                                        className="horizontal-slider"
                                                                        step={1}
                                                                        thumbClassName="example-thumb"
                                                                        trackClassName="example-track"
                                                                        max={11}
                                                                        min={0}
                                                                        onChange={(value) => {
                                                                        this.filterPlanByKey("internet", this.state.stepsInternetValue[value])
                                                                        this.setState({internetValue: value})
                                                                    }}
                                                                        renderThumb={(props, state) => <div {...props}></div>}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <p className="subtitle">Minutos:
                                                                    <b className="rest-font">{this.calculateMinutos()}</b>
                                                                </p>
                                                                <div className="">
                                                                    <ReactSlider
                                                                        className="horizontal-slider"
                                                                        ref={this.minutosRef}
                                                                        max={9}
                                                                        min={0}
                                                                        step={1}
                                                                        thumbClassName="example-thumb"
                                                                        trackClassName="example-track"
                                                                        onChange={(value) => {
                                                                        this.filterPlanByKey("minutos", this.state.stepsMinutosValue[value])
                                                                        this.setState({minutesValue: value})
                                                                    }}
                                                                        renderThumb={(props, state) => <div {...props}></div>}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <p className="subtitle">SMS:
                                                            <b className="rest-font">{this.claculaSms()}</b>
                                                        </p>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="" ref={this.smsRef}>
                                                                    <ReactSlider
                                                                        className="horizontal-slider"
                                                                        max={8}
                                                                        min={0}
                                                                        step={1}
                                                                        thumbClassName="example-thumb"
                                                                        trackClassName="example-track"
                                                                        onChange={(value) => {
                                                                        this.filterPlanByKey("messages", this.state.stepsMessagesValue[value])
                                                                        this.setState({smsValue: value})
                                                                    }}
                                                                        renderThumb={(props, state) => <div {...props}></div>}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <p className="subtitle">Mensajes:
                                                            <b className="rest-font">{this.claculaSms()}</b>
                                                        </p>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="" ref={this.smsRef}>
                                                                    <ReactSlider
                                                                        className="horizontal-slider"
                                                                        max={8}
                                                                        min={0}
                                                                        step={1}
                                                                        thumbClassName="example-thumb"
                                                                        trackClassName="example-track"
                                                                        onChange={(value) => {
                                                                        this.filterPlanByKey("messages", this.state.stepsMessagesValue[value])
                                                                        this.setState({smsValue: value})
                                                                    }}
                                                                        renderThumb={(props, state) => <div {...props}></div>}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </form>
                                        </div>
                                        <div className="col-lg-6 col-ms-12 pl-5">
                                            <div className="row">
                                                <div className="col-lg-12  pr-0">
                                                    <p className="font-bold">REDES</p>
                                                    <div class="dropdown">
                                                        <a
                                                            ref={this.redesRef}
                                                            class="btn inputColor  dropdown-toggle btn-arrow"
                                                            href="#"
                                                            role="button"
                                                            id="dropdownMenuLink"
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false">
                                                            COMPAÑIAS
                                                        </a>

                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                            <a class="dropdown-item" href="#">Action</a>
                                                            <a class="dropdown-item" href="#">Another action</a>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-lg-12  pr-0">
                                                    <p className="font-bold">REGION</p>
                                                    <div class="dropdown">
                                                        <a
                                                            ref={this.estadoRef}
                                                            class="btn inputColor  dropdown-toggle btn-arrow"
                                                            href="#"
                                                            role="button"
                                                            id="dropdownMenuLink"
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false">
                                                            COMPAÑIAS
                                                        </a>

                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                            <a class="dropdown-item" href="#">Action</a>
                                                            <a class="dropdown-item" href="#">Another action</a>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-lg-12  pr-0">
                                                    <p className="font-bold">COMPAÑIAS</p>
                                                    <div class="dropdown">
                                                        <a
                                                            ref={this.compañiaRef}
                                                            class="btn inputColor  dropdown-toggle btn-arrow"
                                                            href="#"
                                                            role="button"
                                                            id="dropdownMenuLink"
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false">
                                                            COMPAÑIAS
                                                        </a>

                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                            <a class="dropdown-item" href="#">Action</a>
                                                            <a class="dropdown-item" href="#">Another action</a>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-12 p-4">
                                                    <button type="button" class="btn btn-danger btn-serach">BUSCAR</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <p className="font-goth">SELECCIONES UNO O VARIOS FILTROS PARA REALIZAR SU BÚSQUEDA</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        )
    }

}

export default SectionList;