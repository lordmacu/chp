import React from 'react'
import SectionResulyItem from './ResultItem'



class SectionListCenter extends React.Component {
    render() {
        return (

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