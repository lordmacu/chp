import React, {Component} from 'react';
import Donut from './Donut';

class SectionResulyItem extends Component {

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
            <div className="row">
                <div className="col-lg-5 text-left">
                    <div className="row">
                        <div className="col-lg-3 text-center">
                            <img alt=" " src="./imagen/Sim-Only-1-m.png"/>
                            <span className="p-font">Prepaid</span>
                            <p className="p-font"> Recharge</p>
                        </div>
                        <div className="col-lg-7 mt-2 pl-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="p-phone-selector">{this.props.item.name}
                                        10
                                    </p>
                                </div>
                                <div className="col-lg-12">
                                <div class="btn-group">
                                    <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <strong><i class="fa fa-info-circle"></i>Prepago</strong>
                                            <span className="p-font">(1 Día)</span>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Separated link</a>
                                    </div>
                                    </div>
                                <div class="input-group-append">
                                        <button type="button" class="btn btn-outline-secondary">
                                       
                                            <strong><i class="fa fa-info-circle"></i>Prepago</strong>
                                            <span className="p-font">(1 Día)</span>
                                        </button>
                                        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-12 ">
                                    <p className="mb-0 p-font">
                                        <strong>Red: AT&T</strong>
                                    </p>
                                    <p className="mb-0 p-font">
                                        Minutos
                                        <span>Ilimitados</span>
                                    </p>
                                    <p className="mb-0 p-font">SMS<span>00</span>
                                    </p>
                                    <p className="mb-0 p-font">Datos Ilimitados<span>00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="img-logo">
                                <img alt=" " className="imga-mobile" src={this.props.item.image}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 text-center">
                    <div className="row">
                        <div className="col-lg-6 donut-left">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Donut data={this.props.item.messages} maxvalue={2000}/>
                                </div>
                                <div className="col-lg-12 sutitles-donut">
                                    <span className="font-weight">{this.props.item.messages}</span>
                                    <p>Minutos</p>
                                    <small className="text-muted-dounut">{this.calculateMensagesValue(2000, this.props.item.messages)}
                                        Mensajes</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 donut-right">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Donut data={this.props.item.internet} maxvalue={15360}/>
                                </div>
                                <div className="col-lg-12 sutitles-donut">

                                    <span className="font-weight">{this.calculateInternetValue(15360, this.props.item.internet)}</span>

                                    <p>Datos</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2">
                    <p className="font-size-45">$0</p>
                    <div className="btn-group">
                        <button
                            className="btn  dropdown-toggle drow-list-donut "
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Filtro</button>
                        <ul className="dropdown-menu">
                            <li className="itemColor">
                                <a href=" # " data-price-type-action="prepaid" data-value="hide" data-line="">Ocultar todas las opciones de prepago</a>
                            </li>
                            <li className="itemColor">
                                <a
                                    href=" # "
                                    className="itemColor"
                                    data-price-type-action="prepaid"
                                    data-value="show"
                                    data-line="">Mostrar todas las opciones de prepago</a>
                            </li>
                            <li className="itemColor">
                                <a href=" # " data-show-filter-modal="1" data-line="1">Otros Filtros</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-2 border-btn">
                    <button type="btn" className="btn btn-primary-donut">Ver Detalle</button>
                </div>
            </div>
        );
    }
}

export default SectionResulyItem;