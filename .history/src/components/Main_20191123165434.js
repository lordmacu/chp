import React from 'react';

import SectionSlider from './Slider';

class  SectionMain extends React.Component{
   
  
    render(){
        

        return(
    
            <div className="home">
                
                <div className="row">
             <div className="col-lg-12 hero">
             <div className="container">
             <div className="row">
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-4 pt-1 pb-2 mr-3 font-Titillium-Web">
                                        <p>RESULTADO:</p>
                                    </div>
                                    <div className="col-6 pl-0">
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
                                </div>
                            </div>
                            <div className="col-4">
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
             <div className="col-lg-12 main"> 
                  <div className="row">
                    <div className="col-lg-9 maind">
                    <SectionSlider/>
                    </div>
                    <div className="col-lg-3 main-right">
                       <div className="row">
                           <div className="col-lg-12">
                               <label>Mas Buscado - Planes de celular</label>
                               <ul className="list-right">
                                 <li><a href=" # ">1.Renovación de Planes</a></li>
                                 <li><a href=" # ">2.Asegurar un smartphone</a></li>
                                 <li><a href=" # ">3.Contratar un plan de celular</a></li>
                                 <li><a href=" # ">4.Medios de Atención a Clientes</a></li>
                                 <li><a href=" # ">5.Cobertura celular en México</a></li>
                               </ul>
                           </div>
                           <div className="col-lg-12">
                           <label>Preguntas sobre Planes de Celular</label>
                           <ul className="list-right">
                                 <li><a href=" # ">1.Renovación de Planes</a></li>
                                 <li><a href=" # ">2.Asegurar un smartphone</a></li>
                                 <li><a href=" # ">3.Contratar un plan de celular</a></li>
                                 <li><a href=" # ">4.Medios de Atención a Clientes</a></li>
                                 <li><a href=" # ">5.Cobertura celular en México</a></li>
                               </ul>
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

export default SectionMain ;


