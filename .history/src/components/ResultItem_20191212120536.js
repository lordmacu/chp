import React, {Component} from 'react';
import Donut from './Donut';


class SectionResulyItem extends Component {

    constructor(props) {
        super(props);
        

        

        var smsVariable=0;
        var minutesVariable=0;
        var internetVariable=0;
        var contratoVariable="";
        var featuresPlan=[];
        for(var i=0; i<this.props.item.features.length;i++){
            var feature=this.props.item.features[i];
            var name=feature.name.trim();
            var valueFeature=feature.pivot.value_feature;
            if(name=="sms"){
                smsVariable=valueFeature.trim()
                feature.name=feature.name+" SMS";
                featuresPlan.push(feature);
            }else
             if(name=="contrato_duracion"){
                contratoVariable=valueFeature.toUpperCase();
            }else
            if(name=="minutes"){
                minutesVariable=valueFeature.trim()
            }else
            if(name=="internet"){
                internetVariable=valueFeature.trim()
            }else{
                featuresPlan.push(feature);
            }
        }

       this.state={
           minutes:minutesVariable,
           sms:smsVariable,
           internet:internetVariable,
           contrato:contratoVariable,
           features:featuresPlan
       }
       
    }


     makeTitle(slug) {
        var words = slug.split('_');
      
        for (var i = 0; i < words.length; i++) {
          var word = words[i];
          words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
      
        return words.join(' ');
      }

      calculateMinutesValue(maxvalue, value){
        if(value==maxvalue){
            return "ilimitado";

        }else{
            if(maxvalue>value){
                return value;
            }else{
                return "ilimitado";
            }
        }
      }
    calculateInternetValue(maxvalue, value) {
        if (maxvalue <= value) {

            return "ilimitado"

        } else {

            if (value > 1024) {
                return (value / 1024).toFixed(1) + "GB"
            } else {
                return value + "GB"
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
            

           
            <div className="row display-on-in-desktop">
                <div className="col-lg-4 text-left">
                    <div className="row">
                        <div className="col-lg-5 text-center mt-3">
                            <p className="p-font">
                                Compañia</p>
                            <div className="img-logo">
                                <img alt=" " className="imga-mobile" src={this.props.item.image}/>
                            </div>

                        </div>
                        <div className="col-lg-7 mt-2 pl-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="p-phone-selector">{this.props.item.name}
                                    </p>
                                </div>

                                <div className="col-lg-12 pt-3">
                                {this
                                .state
                                .features
                                .map((item, key) => {

                                    if(item.pivot.value_feature!=0){
                                        if(item.pivot.value_feature!="NO"){
                                            return <p  key={key} className="mb-0 p-font features-container"> <i className="fa fa-check mr-2"></i> {item.name}  {item.pivot.value_feature} </p>
                                        }else{
                                            return "";
                                        }
                                    }else{
                                        return "";
                                    }
                                })}

                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-center">
                    <div className="row pt-3 mt-1">
                        <div className="col-lg-3 donut-left">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Donut data={this.state.minutes} maxvalue={1000}/>
                                </div>
                                <div className="col-lg-12 sutitles-donut ml-lg-3">
                                    <span className="font-weight">{this.calculateMinutesValue(1000, this.state.minutes) }</span>
                                    <p className="mb-0">Minutos</p>
                                   <p>llamadas</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ml-3  donut-right">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Donut data={this.state.internet} maxvalue={20}/>
                                </div>
                                <div className="col-lg-12 sutitles-donut">

                                    <span className="font-weight">{this.calculateInternetValue(15360, this.props.item.internet)}</span>

                                    <p>Datos</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 donut-right year-position">
                            <div className="row">
                                <div className="col-lg-12 item-year">
                                    
                            <p id="year">{this.props.item.duration}</p><span></span>
                                </div>
                                <div className="col-lg-12 item-contrat">
                                    <p className="mb-0"> Contrato</p>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 position-price-btn">
                    <div className="row">
                        <div className="col-lg-6 text-center">
                            <div className="row economy-list">
                            <div className="col-lg-12 text-center">
                                                        <img className="economy" src="./imagen/economi.png"/>
                                                        <p className="font-size-price-main ">
                                                            <span className="font-simbol">$</span>
                                                            <span>{this.props.item.price}</span>
                                                            <span className="month-font">/mes</span>
                                                        </p>
                                                        <p className="after">antes<span>$ 350</span>
                                                        </p>
                                                    </div>
                            </div>
                            </div>
                        <div className="col-lg-6 border-btn">
                            <button type="btn" className="btn btn-primary-donut">Mas detalle</button>
                        </div>
                    </div>
                </div>

            </div>
           
        );
    }
}

export default SectionResulyItem;