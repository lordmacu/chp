import React from 'react';

import SectionSlider from './Slider';

class  SectionMain extends React.Component{
   
  
    render(){
        

        return(
       
            <div className="home container-fluid">
         <div className="row">
             <div className="col-lg-12 hero">
               <div className="row">
                   <div className="col-md-8">
                   <p className="font-25">aoreet pulvinar justo suscipit pretium </p>
                <p className="font-30">Lorem ipsum dolor sit amet consectetur adipiscing</p>
             
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
 
)
    }

    
}

export default SectionMain ;


