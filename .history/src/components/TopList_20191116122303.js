import React from 'react'
import ReactSlider from 'react-slider';
import SectionResulyItem from './ResultItem'

class SectionListTop extends React.Component {
    render() {
        return (

            <div className="col-lg-12 main-right-list">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-3">
                                <img className="image-link" alt=" " src="./imagen/phone2.png"/>
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

                    <div className="col-lg-8">
                        <form className="filter-list" onSubmit={this.filterPhone}>
                            <div className="row">
                                <div className="col-lg-3">
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
                                                    this.filterPlanByKey("internet", this.state.stepsInternetValue[value])this.setState({internetValue: value})
                                                }}
                                                    renderThumb={(props, state) => <div {...props}></div>}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
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
                                                    this.filterPlanByKey("minutos", this.state.stepsMinutosValue[value])this.setState({minutesValue: value})
                                                }}
                                                    renderThumb={(props, state) => <div {...props}></div>}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
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
                                                    this.filterPlanByKey("messages", this.state.stepsMessagesValue[value])this.setState({smsValue: value})
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
                </div>
            </div>
        )
    }

}
export default SectionListTop;