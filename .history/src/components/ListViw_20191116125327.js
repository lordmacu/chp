import React from 'react';
import ReactSlider from 'react-slider';
import SectionResulyItem from './ResultItem'

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
                                                            <p className="subtitle">Datos</p>
                                                            <p className="mb-3 font-size-14-list value-silider">
                                                                <b>{this.calculateInternet()}</b>
                                                            </p>
                                                            <div className="mb-4">
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
                                                            <p className="subtitle">Minutos</p>
                                                            <p className="mb-3 font-size-14-list value-silider">
                                                                <b >{this.calculateMinutos()}</b>
                                                            </p>
                                                            <div className="mb-4">
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
                                                    <p className="subtitle">Mensajes</p>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <p className="mb-3 font-size-14-list value-silider">
                                                                <b className="title-slide-list">{this.claculaSms()}</b>
                                                            </p>
                                                            <div className="mb-4" ref={this.smsRef}>
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
                                                    <p className="subtitle">Mensajes</p>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <p className="mb-3 font-size-14-list value-silider">
                                                                <b className="title-slide-list">{this.claculaSms()}</b>
                                                            </p>
                                                            <div className="mb-4" ref={this.smsRef}>
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
                                                <div className="col-lg-3">
                                                    <div className="content-filter">
                                                        <p className="p-cont-filter">Filtro</p>
                                                        <button type="submit" className="btn-fliter btn-primary-donut:hover">
                                                            <i className="fa fa-sliders"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <p>elige tu plan</p>
                    </div>
                    <div className="col-lg-12 main">
                        <div className="row">
                            <div className="col-lg-12 main-right-list">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="row">
                                            <div className="col-lg-3">

                                                <i className="fa fa-plus-list"></i>
                                            </div>
                                            <div className="col-lg-9 section-phone-position">
                                                <p className="color-list">Datos</p>
                                                <p className="font-bold-subt">Disponibles con cada plan</p>
                                                <div className="btn-group " ref={this.typeRef} className="btn-section-phone ">
                                                    <button
                                                        className="btn btn-sm dropdown-toggle prepagoDropChange"
                                                        type="button"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <span className="positionDropChange ">
                                                            <strong>Cambiar</strong>
                                                        </span>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">Agregar Smartphone</a>
                                                        <a className="dropdown-item" href="#">Planes Smartphone</a>
                                                        <a className="dropdown-item" href="#">Disponible con cada plan</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 nav-planes-list ">
                                <div className="row ">
                                    <div className="col-lg-12">
                                        <div className="row border-panel-nav">
                                            <div className="col-lg-9">
                                                <ul className="nav item-list">
                                                    <li className="nav-item pr-lg-3 pl-lg-3">
                                                        <div className="section-btn-item-list">
                                                            <button
                                                                type="button"
                                                                className="btn btn-list-plan-item "
                                                                onClick={(e) => this.filterPlanByKey("messages", 1, e)}>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <strong>Prepago</strong>
                                                                        (68)
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <span className="display-block font-1 text-muted visible-lg subtext">
                                                                            $0/recarga</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item">
                                                        <div className="section-btn-item-list">
                                                            <button
                                                                type="button"
                                                                className="btn btn-list-plan-item "
                                                                onClick={(e) => this.getAllResults("minutos", 1, e)}>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <strong>SinContrato</strong>
                                                                        (4)
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <span className="display-block font-1 text-muted visible-lg subtext">
                                                                            $349/recarga</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item">
                                                        <div className="section-btn-item-list">
                                                            <button
                                                                type="button"
                                                                className="btn btn-list-plan-item "
                                                                onClick={(e) => this.filterPlanByKey("internet", 2, e)}>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <strong>Contrato</strong>
                                                                        (28)
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <span className="display-block font-1 text-muted visible-lg subtext">
                                                                            $200/recarga</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item pl-lg-3">
                                                        <div className="section-btn-item-list">
                                                            <button
                                                                type="button"
                                                                className="btn btn-list-plan-item "
                                                                onClick={(e) => this.clearAllResults(e)}>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <strong>Prepago</strong>
                                                                        (104)
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <span className="display-block font-1 text-muted visible-lg subtext">
                                                                            $0/recarga</span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-1">
                                                <ul className="item-list nav-btn-End">
                                                    <li>
                                                        <div className="btn-group">
                                                            <div className="btn-group dropleft ">
                                                                <button
                                                                    type="button"
                                                                    className="btn dropdawn-end dropdawn-rigth dropdown-toggle"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    Filtrar por
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="/">Precio (Menor)
                                                                    </a>
                                                                    <a className="dropdown-item" href=" # ">Costo de equipo (Menor)</a>
                                                                    <a className="dropdown-item" href=" # ">Minutos (Mayor)</a>
                                                                    <a className="dropdown-item" href=" # ">Datos (Mayor)</a>
                                                                    <a className="dropdown-item" href=" # ">Más económico</a>
                                                                    <a className="dropdown-item" href=" # ">Popularidad</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="btn-group">
                                                            <div className="btn-group dropleft ">
                                                                <button
                                                                    type="button"
                                                                    className="btn dropdawn-end dropdawn-rigth dropdown-toggle"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <i className="fa fa-share-alt"></i>
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href=" # ">Widget de Resultados</a>
                                                                    <a className="dropdown-item" href=" # ">Widget de Compañías más vistas</a>
                                                                    <a className="dropdown-item" href=" # ">Widget de Planes más vistos</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {this
                                        .state
                                        .temporalResults
                                        .map((item, key) => <div className="col-lg-12 shadow-result" key={item.id}>
                                            <SectionResulyItem item={item}/>
                                        </div>)}

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