import React from 'react';
import ReactSlider from 'react-slider';
import SectionResulyItem from './ResultItem'




class SectionList extends React.Component{
    
    internetRef = React.createRef();
    minutosRef = React.createRef();
    smsRef = React.createRef();
    typeRef = React.createRef();
   
  
    filterPhone = (e) =>{
      e.preventDefault();
  
     console.log()
      const infoFilter ={
        internetRef: this.state.stepsInternet[this.state.internetValue],
        minutosRef: this.state.stepsMinutos[this.state.minutesValue],
        smsRef: this.state.stepsSms[this.state.smsValue],
        type:this.typeRef.current.value
        
  
        
      }
      console.log(infoFilter)
    }
  
    constructor(props) {
       super(props);
     
       this.state={
        results:[
          {
            image :('./imagen/logo-result.png') ,
            internet:4800,
            minutos:200,
            messages:1600,
            name:"UFONE",


          },
          {
            
            internet:6000,
            minutos:200,
            messages:1400,
            name:"camilo",
            image :('./imagen/movi.jpeg')

          },
          {
            
            internet:2000,
            minutos:200,
            messages:2000,
            name:"camilo",
            image :('./imagen/at&t.png')
            

          },
          {
            
            internet:3100,
            minutos:200,
            messages:1200,
            name:"camilo",
            image :('./imagen/Cierto-l.png  ')
            
          }
         ],
         temporalResults:[],
       
        networkValue:0,
        internetValue:0,
        minutesValue:0,
        smsValue:0,
        stepsInternet:["0MB","50MB","100MB","200MB","500MB","1GB","2GB","3GB","5GB","10GB","15GB","Ilimitado"],
        stepsInternetValue:["0","50","100","200","500","1024","2048","3072","5120","10240","15360","Ilimitado"],
        stepsMinutos:["0","100","200","300","400","500","1000","1500","2000","Ilimitado"],
        stepsMessagesValue:["0"," 50","100","250","500","750","1,000","1,500","2,000","Ilimitado"],
        stepsSms:[" 0"," 50","100","250","500","750","1,000","1,500","2,000","Ilimitado"],
        stepsMinutosValue:[" 0"," 50","100","250","500","750","1,000","1,500","2,000","Ilimitado"]
      }

      this.filterPlanByKey = this.filterPlanByKey.bind(this);
      this.getAllResults = this.getAllResults.bind(this);
      this.clearAllResults = this.clearAllResults.bind(this);
      
      //this.setState({temporalResults:this.state.results})


      this.state.temporalResults=this.state.results;


      
    }
  
    getAllResults(){
      this.setState({temporalResults:this.state.results})
    }


    clearAllResults(){
      this.setState({temporalResults:[]})
    }


//internet  40
    filterPlanByKey(propiedadABuscar,value){
   //console.log("saqui ",this.state.results,key)

      var resultsLocal=this.state.results;

      var internalArray=[];

      for( let index in resultsLocal){  //4

        //results[0]  = {messages:10,internet:20,name:"camilo"}
        //results[1]  = {messages:30,internet:20,name:"camilo"}

        for(let propiedadObjetoLocal in resultsLocal[index]){
          // key = messages 1 vez
          // key = internet 2 vez
          // key = name 3 vez
          /// results[item][key]  = results[item][messages]  = 10 1 vez
          //results[0][messages]
          //results[0][internet]
          //results[0][name]


            //results[1][messages]
          //results[1][internet]
          //results[1][name]

         // console.log(key,results[item][key]);
         //menssages == messages

         let objecto=resultsLocal[index];

         //objeto[messages]
         let valueProperty=objecto[propiedadObjetoLocal];




          if(propiedadObjetoLocal === propiedadABuscar){

              if(valueProperty >=value){
                internalArray.push(objecto);
              }
          //  console.log(key,results[item][key]);
          }
         
        }
         // console.log(this.state.results[item]);
      }

      console.log(internalArray)



      this.setState({temporalResults:internalArray})

    }
    
    calculateInternet(){

      
       return this.state.stepsInternet[this.state.internetValue];
    }
    calculateStepInternet(){
      let stepInternet=1;
      return stepInternet;
    }
  
    calculateMinutos(){
      return this.state.stepsMinutos[this.state.minutesValue];
    }
    calculateStepMinutos(){
      let stepMinutos=1;
      return stepMinutos;
    }
  
    claculaSms(){
      return this.state.stepsSms[this.state.smsValue];
    } 
    calculateSeptSms(){
      let stepSms=1;
      return stepSms;
    }
     render(){

        return(

    
            <div className="container-fluid home">
              
      <div className="row">
          <div className="col-lg-12 ColorHeader">
          <nav className="navbar navbar-light  navbar-list">
           
           <div className="row">
             <div className="col-lf-3">
             <p>Estado</p>
             </div>
                <div className="col-lg-4">
                <form className="form-inline ">
            <div className="dropdown ">
              <button className="btn  dropdown-toggle drow-list" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ninguno Seleccionado  
              </button>
              <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href=" # ">Buenos aires</a>
                <a className="dropdown-item" href=" # ">Rosario</a>
                <a className="dropdown-item" href=" # ">San Antonio</a>
              </div>
            </div>
            </form>
                </div>
                <div className="col-lg-7">
                  <p className="information">(Muestra ubicación - Precio específico)</p>
                </div>
           </div>
          </nav>
           </div>
          <div className="col-lg-12 main"> 
               <div className="row">
                 <div className="col-lg-6 maind-list">
                 <div className="row">
                     <div className="col-lg-12 pt-lg-3 pl-lg-1"> 
                     <ul className="nav-list pl-lg-3">
                         <li><a href="/home">inicio /</a> </li>
                         <li className="pl-2" href="/home"><a href="/home">Planes de Celular</a></li>
                     </ul>
                    
                         </div>
                     </div>
                     <div className="col-lg-12 text-left pl-lg-1 font-plan-list">Planes de Celular en</div>
                     <div className="col-lg-12 text-left pl-lg-1 font-bold-list">
                           Lorem
                           </div>
                     </div>
                 </div>
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
                                    <div className="btn-group" >
                                        <select  type="button"  ref={this.typeRef} className="btn btn-section-phone btn-sm "  id="exampleFormControlSelect1">
                                        
                                        <option>Cambiar </option>
                                        <option>Agregar Smartphone</option>
                                        <option>Planes Smartphone</option>
                                        <option>Disponible con cada plan</option>
                                      </select>
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
                                                    <p className="mb-3 font-size-14-list value-silider"><b>{this.calculateInternet()}</b> </p>
                                                      <div className="mb-4"> 
                                                            <ReactSlider 
                                                            className="horizontal-slider"
                                                            step={1}
                                                            thumbClassName="example-thumb"
                                                            trackClassName="example-track"
                                                            max={11}
                                                            min={0}
                                                            onChange={(value)=>{
                                                              this.filterPlanByKey("internet",this.state.stepsInternetValue[value])

                                                              this.setState({internetValue:value})
                                                            }}
                                                            renderThumb={(props, state) => <div {...props}></div>}
                                                          />
                                                      </div>
                                                  </div> 
                                            </div>
                                        </div>
                                 <div className="col-lg-3">
                                        <div className="row">
                                            <div className="col-lg-12">
                                              <p className="subtitle">Minutos</p>
                                              <p className="mb-3 font-size-14-list value-silider"><b >{this.calculateMinutos()}</b> </p>
                                              <div className="mb-4"> 
                                              <ReactSlider
                                                        className="horizontal-slider"
                                                        ref={this.minutosRef}
                                                        max={9}
                                                        min={0}
                                                        step={1}
                                                        thumbClassName="example-thumb"
                                                        trackClassName="example-track"
                                                        onChange={(value)=>{
                                                          this.filterPlanByKey("minutos",this.state.stepsMinutosValue[value])
                                                          this.setState({minutesValue:value})
                                                        }}
                                                        renderThumb={(props, state) => <div {...props}></div>}
                                                    />
                                                    </div>
                                              </div> 
                                        </div>
                                   </div> 
                                    <div className="col-lg-3">
                                        <p className="subtitle">Mensajes</p>
                                          <div className="row">
                                             <div className="col-lg-12">
                                                <p className="mb-3 font-size-14-list value-silider"> <b className="title-slide-list">{this.claculaSms()}</b> </p>
                                                <div className="mb-4" ref={this.smsRef}> 
                                                    <ReactSlider
                                                              className="horizontal-slider"
                                                              max={8}
                                                              min={0}
                                                              step={1}
                                                              thumbClassName="example-thumb"
                                                              trackClassName="example-track"
                                                              onChange={(value)=>{
                                                                this.filterPlanByKey("messages",this.state.stepsMessagesValue[value])
                                                                this.setState({smsValue:value })
                                                              }}
                                                              renderThumb={(props, state) => <div {...props}></div>}
                                                          />
                                                  </div>
                                               </div> 
                                          </div>
                                     </div> 
                                         <div className="col-lg-3">
                                              <div className="content-filter">
                                                  <p className="p-cont-filter">Filtro</p>
                                                    <button type="submit" className="btn btn-fliter">
                                                      <i className="fa fa-sliders"></i>
                                                    </button>
                                                 </div> 
                                              </div>
                                       </div>

                                
                                </form> 
                           </div>
                     </div>
                   </div>
                 <div className="col-lg-12 nav-planes-list ">
                   <div className="row ">
                     <div className="col-lg-12">
                       <div className="row border-panel-nav">
                       <div className="col-lg-9">
                  <ul className="nav item-list">
                      <li className="nav-item pr-lg-3 pl-lg-3">
                      <div className="section-btn-item-list">
                     <button type="button" className="btn btn-list-plan-item " onClick={(e) => this.filterPlanByKey("messages",1, e)}    >
                     <div className="row" >
                          <div className="col-lg-12">
                          <strong>Prepago</strong>  (68)
                          </div>
                          <div className="col-lg-12">
                              <span className="display-block font-1 text-muted visible-lg subtext"> $0/recarga</span>
                          </div>
                         </div>
                     </button>
                     </div>
                      </li>
                      <li className="nav-item">
                      <div className="section-btn-item-list">
                     <button type="button" className="btn btn-list-plan-item "  onClick={(e) => this.getAllResults("messages","minutos",10,e)}   >
                     <div className="row">
                          <div className="col-lg-12">
                          <strong>SinContrato</strong>  (4)
                          </div>
                          <div className="col-lg-12">
                              <span className="display-block font-1 text-muted visible-lg subtext"> $349/recarga</span>
                          </div>
                         </div>
                     </button>
                     </div>
                      </li>
                      <li className="nav-item">
                      <div className="section-btn-item-list">
                     <button type="button" className="btn btn-list-plan-item "  onClick={(e) => this.filterPlanByKey("internet",40, e)} >
                     <div className="row">
                          <div className="col-lg-12">
                          <strong>Contrato</strong>  (28)
                          </div>
                          <div className="col-lg-12">
                              <span className="display-block font-1 text-muted visible-lg subtext"> $200/recarga</span>
                          </div>
                         </div>
                     </button>
                     </div>
                     </li>
                      <li className="nav-item pl-lg-3">
                      <div className="section-btn-item-list">
                     <button type="button" className="btn btn-list-plan-item "  onClick={(e) => this.clearAllResults(e)}  >
                       <div className="row">
                          <div className="col-lg-12">
                          <strong>Prepago</strong>  (104)
                          </div>
                          <div className="col-lg-12">
                              <span className="display-block font-1 text-muted visible-lg subtext"> $0/recarga</span>
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
                        <div className="dropdown show ">
                              <a  className="btn dropdawn-end dropdown-toggle pl-lg-2 pr-lg-2" href=" # "role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filtrar por
                              </a>

                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href=" # ">Action</a>
                                <a className="dropdown-item" href=" # ">Another action</a>
                                <a className="dropdown-item" href=" # ">Something else here</a>
                              </div>
                            </div>
                            </div>
                        </li>
                        <li>
                        <div className="btn-group">
                        <div className="btn-group dropleft ">
                          <button type="button" className="btn btn-secondary dropdawn-end dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-share-alt"></i>
                          </button>
                          <div className="dropdown-menu">
                          <a className="dropdown-item" href=" # ">Action</a>
                                <a className="dropdown-item" href=" # ">Another action</a>
                                <a className="dropdown-item" href=" # ">Something else here</a>
                          </div>
                        </div>
                        </div>
                        
                        </li>
                      </ul>
                    </div> 
                       </div>
                   </div>

                   {this.state.temporalResults.map((item,key) =>
                  <div className="col-lg-12 shadow-result">
                  <SectionResulyItem  item={item} />
                      </div>  
                                
                  )}

                         
                   </div>
                   
                   </div> 
                   
                                                     
              </div>
          </div>
         
         
      </div>

   
 )
     }

  

} 

export default SectionList; 