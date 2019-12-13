import React from 'react';
import SectionNavbar from './Navbar';
import SectionSlider from './DonutMain';
import SectionResultMainMobile from './main-mobile'

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
                            <div className="col-lg-12">
                                <div className="row">
                                    <div
                                        className="col-lg-12 hero"
                                        data-toggle="collapse"
                                        data-target="#collapseOne">
                                        <div className="row">
                                            <div className="col-lg-9 col-6 pb-3 item-superior">
                                                <div className="row">
                                                    <div className="col-lg-2 col-6 pt-1 pb-2  font-Titillium-Web">
                                                        <p className="mt-2 text-white">RESULTADO:</p>
                                                    </div>
                                                    <div className="col-lg-4 col-6 pl-0 pt-1 text-left">
                                                        <div className="btn-group">
                                                            <button
                                                                type="button"
                                                                className="btn font-Titillium-Web btn-contrat pl-0 pr-3 pt-2"
                                                                data-toggle="dropdown"
                                                                aria-expanded="false ">
                                                                <p className="text-white">CON CONTRATO</p>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn dropdown-toggle dropdown-toggle-split pt-1 pl-0 arrow2"
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
                                                    <div className="col-lg-12 text-center arrow-position">
                                                        <img className="arrow-nav" src="../imagen/arrow-up.png"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-6">
                                                <div className="row position-circle">
                                                    <div className="col-4 ml-3 font-Titillium-Web">
                                                        <p class="text-white pt-3">FILTRAR</p>
                                                    </div>
                                                    <div className="col-5">
                                                        <button type="button " className="btn btn-circle-nav btn-circle-main">
                                                            <i className="fa fa-sliders"></i>
                                                        </button >
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="container pl-0 pr-0">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div
                                            id="collapseOne"
                                            className="collapse show"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="main-mobile">
                                                        <div className="row">
                                                            <SectionResultMainMobile/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 main">
                                                        <div className="row">
                                                            <div className="col-lg-12 maind">
                                                                <div className="row">
                                                                    <div className="col-lg-11 text-left position-tem">INICIO /PLANES TELEFONÍA/ HASTA<span>$ 1000<span/></span>

                                                                    </div>
                                                                    <div className="col-lg-1 ">
                                                                        <i className="fa fa-share fa-flip-horizontal"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <SectionSlider/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card pt-4 pb-5"
                                        data-toggle="collapse"
                                        data-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        <div className="" id="headingTwo">
                                            <div className=" collapsed">
                                                <div className="row">
                                                    <div className="col-lg-11">
                                                        <p className="details">MAS DETALLES:</p>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <i className="fa fa-chevron-down"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="collapse"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-12 font-Titillium-Web">
                                                        <div className="row text-left justify-content-center">
                                                            <div className="col-lg-4">

                                                                <p className="details-more">
                                                                    <i className="fa fa-check"></i>1 GB de internet + WhatsApp gratis.</p>

                                                                <p className="details-more">
                                                                    <i className="fa fa-check"></i>Llamadas ilimitadas a todo Claro</p>

                                                                <p className="details-more">
                                                                    <i className="fa fa-check"></i>50 minutos a las compañias
                                                                </p>

                                                                <p className="details-more">
                                                                    <i className="fa fa-check"></i>50 SMS incluidos a todo destino</p>

                                                                <p className="details-more">
                                                                    <i className="fa fa-check"></i>Claro video incluido</p>

                                                                <p className="details-more">
                                                                    <i className="fa fa-check"></i>Saldo incliodo: $50</p>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <p className="details-more">
                                                                    <i className="fa fa-check"></i>
                                                                    Precio de minuto incluido: $6
                                                                </p>
                                                                <p className="details-more">
                                                                    <i class="fa fa-check"></i>
                                                                    Precio de minuto exedente a otras compañías:$9,5
                                                                </p>
                                                                <p className="details-more">
                                                                    <i class="fa fa-check"></i>
                                                                    Precio de SMS exedente: $2,5
                                                                </p>
                                                                <p className="details-more">
                                                                    <i class="fa fa-check"></i>
                                                                    Contrato a 12 meses.
                                                                </p>
                                                                <p className="details-more">
                                                                    <i class="fa fa-check"></i>
                                                                    Encuentrá Gigas adicionales en ¡PACKS YA!
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card"
                                        data-toggle="collapse"
                                        data-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <div class="" id="headingThree">
                                            <div class=" collapsed">
                                                <div className="row">
                                                    <div className="col-lg-11">
                                                        <p className="details">MAS DETALLES:</p>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <i class="fa fa-chevron-down"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            class="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div className="col-lg-12">
                                                        <p>

                                                            ¿Por qué lo usamos? Es un hecho establecido hace demasiado tiempo que un lector
                                                            se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                                            El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de
                                                            las letras, al contrario de usar textos como por ejemplo "Contenido aquí,
                                                            contenido aquí". Estos textos hacen parecerlo un español que se puede leer.
                                                            Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum
                                                            como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por
                                                            resultado muchos sitios web que usan este texto si se encuentran en estado de
                                                            desarrollo. Muchas versiones han evolucionado a través de los años, algunas
                                                            veces por accidente, otras veces a propósito (por ejemplo insertándole humor y
                                                            cosas por el estilo).

                                                        </p>
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
            </div>

        )
    }

}

export default SectionMain;
