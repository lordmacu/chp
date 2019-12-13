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
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 nav-planes-list ">
                        <div className="row ">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-lg-12 position-title-list">
                                                                <div className="row">
                                                                    <div className="col-lg-2 pt-2 pb-2 mr-3 font-Titillium-Web">
                                                                        <p>RESULTADO:</p>
                                                                    </div>
                                                                    <div className="col-lg-5 pl-0">
                                                                        <div class="btn-group">
                                                                            <button type="button" class="btn font-Titillium-Web">CON CONTRATO</button>
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
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <p className="plan-font">
                                                                    PLANES MÁS ECONÓMICOS
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div class="btn-group">
                                                                    <button type="button" class="btn font-Titillium-Web">CON CONTRATO</button>
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
                                                            <div className="col-lg-3">
                                                                <div className="content-filter">
                                                                    <button type="submit" className="btn-fliter btn-primary-donut:hover">
                                                                        <i className="fa fa-sliders"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

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

        )
    }

}
export default SectionListCenter;