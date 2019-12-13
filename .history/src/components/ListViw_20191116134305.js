import React from 'react';
import ReactSlider from 'react-slider';
import SectionListCenter from './ListCenter';


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

            // results[0]  = {messages:10,internet:20,name:"camilo"} results[1]  =
            // {messages:30,internet:20,name:"camilo"}

            for (let propiedadObjetoLocal in resultsLocal[index]) {
                // key = messages 1 vez key = internet 2 vez key = name 3 vez /
                // results[item][key]  = results[item][messages]  = 10 1 vez
                // results[0][messages] results[0][internet] results[0][name]
                // results[1][messages] results[1][internet] results[1][name]
                // console.log(key,results[item][key]); menssages == messages

                let objecto = resultsLocal[index];

                //objeto[messages]
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

            <div className="container home">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <p>elige tu plan</p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                                        <form className="filter-list" onSubmit={this.filterPhone}>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <p className="subtitle">Datos <b>{this.calculateInternet()}</b></p>
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
                                                            <p className="subtitle">Minutos <b >{this.calculateMinutos()}</b></p>
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
                                                    <p className="subtitle">Mensajes <b className="title-slide-list">{this.claculaSms()}</b></p>
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
                                                    <p className="subtitle">Mensajes  <b className="title-slide-list">{this.claculaSms()}</b></p>
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
                    <div className="col-lg-4 col-sm-12">
                   
                                <div className="row ">
                                    <div className="col-lg-12 pr-0">

                                        <label className="font-bold">Redes
                                        </label>
                                        <select
                                            ref={this.redesRef}
                                            className="form-control inputColor font-size-14"
                                            id="exampleFormControlSelect1">
                                            <option >Mostrar Todas</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>

                                    </div>
                                    <div className="col-lg-12  pr-0 ">

                                        <label className="font-bold">Estado</label>
                                        <select
                                            ref={this.estadoRef}
                                            className="form-control inputColor font-size-14"
                                            id="exampleFormControlSelect1">
                                            <option >Ninguna seleccionada</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-12  pr-0">

                                        <label className="font-bold">Compañia actual</label>
                                        <select
                                            ref={this.compañiaRef}
                                            className="form-control inputColor font-size-14"
                                            id="exampleFormControlSelect1">
                                            <option >Otra ninguna</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>

                                </div>
                          
                    </div>
                    <div className="col-lg-12 main">
                   
                        

                    </div>
                </div>

            </div>

        )
    }

}

export default SectionList;