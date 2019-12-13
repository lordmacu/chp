import React from 'react'
import SectionResulyItem from './ResultItem'
import SectionResultMobile from './ResultMobile';



class SectionListCenter extends React.Component {
    constructor(props) {
        super(props);


        
        this.state = {
            results: [
                
            ],
            temporalResults: [],
            datapostPlans:[],

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
    callListCenter(){
        console.log("calling listcenter");
    }

    getAllResults() {
        this.setState({ temporalResults: this.state.results })
    }
 
    clearAllResults(data) {
        this.setState({ datapostPlans: data })
        this.fetchDataFilter();
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

        this.setState({ temporalResults: internalArray })

    }
    fetchDataFilter(){
        const res = fetch('http://comparador.tiendaclaro.uy/getPlans', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.datapostPlans)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({results:responseJson.data})


            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
       
        this.fetchDataFilter();
        console.log("se ha montado el componente");
    }

    render() {
        return (
            <div className="container ">
                <div className="row position-list-centre">
                    <div className="col-12 display-on-in-mobile position-nav-list-center">
                        <div className="row">
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-4 pt-3 pb-3 mr-3 font-Titillium-Web">
                                        <p className="no-margin">RESULTADO:</p>
                                    </div>
                                    <div className="col-6 pl-0 pt-2">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn font-Titillium-Web btn-contrat pl-0 pr-0"
                                                data-toggle="dropdown"
                                                aria-expanded="false">CON CONTRATO</button>
                                            <button
                                                type="button"
                                                className="btn dropdown-toggle dropdown-toggle-split pt-1 pl-0 arrow"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                <span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a
                                                    className="dropdown-item"
                                                    onClick={(e) => this.filterPlanByKey("messages", 1, e)}
                                                    href=" # ">Prepago (68) $0/recarga</a>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={(e) => this.getAllResults("minutos", 1, e)}
                                                    href=" # ">SinContrato (4) $349/recarga</a>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={(e) => this.filterPlanByKey("internet", 2, e)}
                                                    href=" # ">Contrato (28) $200/recarga</a>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={(e) => this.clearAllResults(e)}
                                                    href=" # ">Prepago (28) $200/recarga</a>

                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href=" # ">Separated link</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <p className="plan-font">PLANES MÁS ECONÓMICOS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row position-circle">
                                    <div className="col-4 ml-3">
                                        <button type="button " className="btn btn-circle-nav">
                                            <img alt=" " src="../imagen/arrow-up-down.png" />
                                        </button >
                                    </div>
                                    <div className="col-5">
                                        <button type="button " className="btn btn-circle-nav">
                                            <i className="fa fa-sliders"></i>
                                        </button >
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 nav-planes-list ">
                        <div className="row ">
                            <div className="col-lg-12 display-on-in-desktop">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <div className="col-lg-12 position-title-list">
                                                                <div className="row">
                                                                    <div className="col-lg-2 pt-3 pb-3 mr-3 font-Titillium-Web">
                                                                        <p className="no-margin">RESULTADO:</p>
                                                                    </div>
                                                                    <div className="col-lg-5 pl-0 pt-2">
                                                                        <div className="btn-group">
                                                                            <button
                                                                                type="button"
                                                                                className="btn font-Titillium-Web"
                                                                                data-toggle="dropdown"
                                                                                aria-expanded="false">CON CONTRATO</button>
                                                                            <button
                                                                                type="button"
                                                                                className="btn dropdown-toggle dropdown-toggle-split pt-1 pl-0 arrow"
                                                                                data-toggle="dropdown"
                                                                                aria-haspopup="true"
                                                                                aria-expanded="false">
                                                                                <span className="sr-only">Toggle Dropdown</span>
                                                                            </button>
                                                                            <div className="dropdown-menu">
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    onClick={(e) => this.filterPlanByKey("messages", 1, e)}
                                                                                    href=" # ">Prepago (68) $0/recarga</a>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    onClick={(e) => this.getAllResults("minutos", 1, e)}
                                                                                    href=" # ">SinContrato (4) $349/recarga</a>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    onClick={(e) => this.filterPlanByKey("internet", 2, e)}
                                                                                    href=" # ">Contrato (28) $200/recarga</a>
                                                                                <a
                                                                                    className="dropdown-item"
                                                                                    onClick={(e) => this.clearAllResults(e)}
                                                                                    href=" # ">Prepago (28) $200/recarga</a>

                                                                                <div className="dropdown-divider"></div>
                                                                                <a className="dropdown-item" href=" # ">Separated link</a>
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
                                                    <div className="col-lg-6 pt-2">
                                                        <div className="item-filter-list">
                                                            <div className="content-filter">
                                                                <p className="mb-0 ml-1">Filtrar</p>
                                                                <button type="submit" className="btn-fliter btn-primary-donut:hover">
                                                                    <i className="fa fa-sliders"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="item-filter-list order-by-button">
                                                            <div className="circle-filter-arrow container-item-filter-list">
                                                                <img alt=" " className="up-arrow" src="../imagen/up-arrow.png" />
                                                            </div>
                                                            <div className="btn-group btn-ordenar container-item-filter-list  ">
                                                                <button
                                                                    type="button"
                                                                    className="btn font-Titillium-Web"
                                                                    aria-expanded="false"
                                                                    data-toggle="dropdown">Ordenar por</button>
                                                                <button
                                                                    type="button"
                                                                    className="btn dropdown-toggle dropdown-toggle-split pt-1 pl-0 arrow"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <span className="sr-only">Toggle Dropdown</span>
                                                                </button>
                                                                <div className="dropdown-menu">
                                                                    <a
                                                                        className="dropdown-item"
                                                                        onClick={(e) => this.filterPlanByKey("messages", 1, e)}
                                                                        href=" # ">Prepago (68) $0/recarga</a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        onClick={(e) => this.getAllResults("minutos", 1, e)}
                                                                        href=" # ">SinContrato (4) $349/recarga</a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        onClick={(e) => this.filterPlanByKey("internet", 2, e)}
                                                                        href=" # ">Contrato (28) $200/recarga</a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        onClick={(e) => this.clearAllResults(e)}
                                                                        href=" # ">Prepago (28) $200/recarga</a>

                                                                    <div className="dropdown-divider"></div>
                                                                    <a className="dropdown-item" href=" # ">Separated link</a>
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
                                .results
                                .map((item, key) => <div className="col-lg-12 shadow-result" key={item.id}>
                                    <SectionResulyItem item={item} />
                                    <SectionResultMobile item={item} />
                                </div>)}

                        </div>

                    </div>
                </div>
            </div>

        )
    }

}
export default SectionListCenter;