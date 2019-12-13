import React from 'react';
import ReactSlider from 'react-slider';
import SectionListCenter from './ListCenter';

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

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
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
                                                    <p className="subtitle">Datos
                                                        <b>{this.calculateInternet()}</b>
                                                    </p>
                                                    <div className="">
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
                                                    <p className="subtitle">Minutos
                                                        <b >{this.calculateMinutos()}</b>
                                                    </p>
                                                    <div className="">
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
                                            <p className="subtitle">Mensajes
                                                <b className="title-slide-list">{this.claculaSms()}</b>
                                            </p>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="" ref={this.smsRef}>
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
                                            <p className="subtitle">Mensajes
                                                <b className="title-slide-list">{this.claculaSms()}</b>
                                            </p>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="" ref={this.smsRef}>
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

                                    </div>

                                </form>
                            </div>
                            <div className="col-lg-4 col-sm-12">

                                <div className="row ">
                                    <div className="col-lg-12 pr-0">

                                        <label className="font-bold">Redes
                                        </label>
                                        <select
                                            ref={this.redesRef}
                                            className="form-control inputColor font-size-14"
                                            id="exampleFormControlSelect1">
                                            <option >Mostrar Todas</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>

                                    </div>
                                    <div className="col-lg-12  pr-0 ">

                                        <label className="font-bold">Estado</label>
                                        <select
                                            ref={this.estadoRef}
                                            className="form-control inputColor font-size-14"
                                            id="exampleFormControlSelect1">
                                            <option >Ninguna seleccionada</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-12  pr-0">

                                        <label className="font-bold">Compañia actual</label>
                                        <select
                                            ref={this.compañiaRef}
                                            className="form-control inputColor font-size-14"
                                            id="exampleFormControlSelect1">
                                            <option >Otra ninguna</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-12">
                   <SectionListCenter/>
                    </div>
                </div>
                

            </div>

        )
    }

}

export default SectionList;