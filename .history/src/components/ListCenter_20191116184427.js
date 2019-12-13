import React from 'react'
import SectionResulyItem from './ResultItem'



class SectionListCenter extends React.Component {
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
    render() {
        return (

<div className="row container">
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
                                                    <div className="col-lg-3">
                                                    <div className="content-filter">
                                                        <p className="p-cont-filter">Filtro</p>
                                                        <button type="submit" className="btn-fliter btn-primary-donut:hover">
                                                            <i className="fa fa-sliders"></i>
                                                        </button>
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

           
        )
    }

}
export default SectionListCenter;