import React from 'react';
import SectionNavbar from './Navbar';
import SectionSlider from './Slider';

class SectionMain extends React.Component {

    render() {

        return (

            <div className="container-fluid home">
                <div className="row">
                    <div className="col-lg-12 pl-0 pr-0">
                        <SectionNavbar/>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="container-fluid pl-0 pr-0">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-12 hero" data-toggle="collapse" data-target="#collapseOne">
                                            <div className="row">
                                                <div className="col-lg-9 col-6 pb-3 item-superior">
                                                    <div className="row">
                                                        <div className="col-lg-2 col-6 pt-1 pb-2  font-Titillium-Web">
                                                            <p className="mt-2">RESULTADO:</p>
                                                        </div>
                                                        <div className="col-lg-4 col-6 pl-0 pt-1 text-left">
                                                            <div className="btn-group">
                                                                <button
                                                                    type="button"
                                                                    className="btn font-Titillium-Web btn-contrat pl-0 pr-3 pt-2"
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
                                                <div className="col-lg-2 col-6">
                                                    <div className="row position-circle">
                                                        <div className="col-4 ml-3">
                                                            <button type="button " className="btn btn-circle-nav">
                                                                <img alt=" " src="../imagen/arrow-up-down.png"/>
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
                                    </div>

                                </div>

                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                        <div
                                            id="collapseOne"
                                            class="collapse show"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div className="row">
                                                    <div className="col-lg-12 main">
                                                        <div className="row">
                                                            <div className="col-lg-12 maind">
                                                            <div className="col-lg-12 text-left position-tem">INICIO /PLANES TELEFONÍA/ HASTA<span>$ 1000<span/></span></div>
                                                                <SectionSlider/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h2 class="mb-0">
                                                <button
                                                    class="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                    Collapsible Group Item #2
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            class="collapse"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordionExample">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                                cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                                                you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h2 class="mb-0">
                                                <button
                                                    class="btn btn-link collapsed"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    Collapsible Group Item #3
                                                </button>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            class="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordionExample">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                                cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                                                you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default SectionMain;
