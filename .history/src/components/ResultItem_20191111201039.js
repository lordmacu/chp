

import React, {Component} from 'react';
import Donut from  './Donut';

class SectionResulyItem extends Component {
    render() {
        return (
            <div className="row">
                    <div className="col-lg-5 text-left">
                            <div className="row">
                                    <div className="col-lg-3">
                                            <img src="./imagen/Sim-Only-1-m.png"/>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p>Unefon Ilimitado 10 </p>
                                            </div>
                                            <div className="col-lg-12">
                                            <div class="btn-group mar-y-1">
                                                        <button data-html="true" data-title="" data-original-title="" data-content="Este paquete vence cada día " data-placement="top" data-toggle="popover" data-container="body" type="button" class="btn btn-info btn-xs text-break font-2" data-stop-propagation="">
                                                                <span class="fa fa-info-circle align-text-top"></span>
                                                            <strong>Prepago</strong>
                                                    (1 Día)    </button>
                                                            <button type="button" class="btn btn-info btn-xs dropdown-toggle font-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-enable-when-ready="">
                                                                <span class="caret"></span>
                                                                <span class="sr-only">Desplegable</span>
                                                            </button>
                                                            <ul class="dropdown-menu">
                                                                    <li className="itemColor"><a  data-price-type-action="prepaid" data-value="hide" data-line="">Ocultar todas las opciones de prepago</a></li>
                                                                    <li className="itemColor"><a className="itemColor" data-price-type-action="prepaid" data-value="show" data-line="">Mostrar todas las opciones de prepago</a></li>
                                                                            <li className="itemColor"><a  data-show-filter-modal="1" data-line="1">Otros Filtros</a></li>
                                                            </ul>
                                                    </div>
                                            </div>
                                            <div className="col-lg-12 ">
                                                <p className="mb-0 p-font"><strong>Red: AT&T</strong></p>
                                                <p className="mb-0 p-font"> Minutos <span>Ilimitados</span></p>
                                                <p className="mb-0 p-font">SMS<span>00</span></p>
                                                <p className="mb-0 p-font">Datos Ilimitados<span>00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                                <div className="img-logo">
                                                        <img src="./imagen/logo-result.png"/>
                                                </div>
                                    </div>
                            </div>
                    </div>
                    <div className="col-lg-3 text-center">
                        <div className="row">
                                <div className="col-lg-6 donut-left">
                                    <div className="row">
                                            <div className="col-lg-12">
                                            <Donut/>
                                        </div>
                                            <div className="col-lg-12 sutitles-donut">
                                            <span className="font-weight">{this.props.item.messages}</span> 
                                            <p>Minutos</p> 
                                            <small className="text-muted-dounut">+ {this.props.item.messages} Mensajes</small> 
                                            </div>
                                    </div>
                            </div>
                            <div className="col-lg-6 donut-right">
                            <div className="row">
                                            <div className="col-lg-12">
                                            <Donut/>
                                        </div>
                                            <div className="col-lg-12 sutitles-donut">
                                            <span className="font-weight">{this.props.item.internet}MB</span> 
                                            <p>Datos</p> 
                                            
                                            </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-2">
                        <p className="font-size-45">$0</p>
                        <div className="btn-group">
                        <button class="btn  dropdown-toggle drow-list-donut " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Filtro</button>
                              <ul class="dropdown-menu">
                                  <li className="itemColor"><a  data-price-type-action="prepaid" data-value="hide" data-line="">Ocultar todas las opciones de prepago</a></li>
                                  <li className="itemColor"><a className="itemColor" data-price-type-action="prepaid" data-value="show" data-line="">Mostrar todas las opciones de prepago</a></li>
                                   <li className="itemColor"><a  data-show-filter-modal="1" data-line="1">Otros Filtros</a></li>
                             </ul>
                        </div>
                        
                    </div>
                    <div className="col-lg-2 border-btn">
                        <buttom className="btn btn-primary-donut ">Ver Detalle</buttom>
                    </div>
        </div>
        );
    }
}

export default SectionResulyItem;