import React from 'react';
import SectionFotter from './Footer';
import SectionMain from './Main';
import SectionNavbar from './Navbar';
import "../css/App.css";
import SectionList from './ListViw';
import {
  BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";




function App(){
     return (
       <Router path="/home" exact  component={SectionMain}>
         <Redirect to="/List"/>
           <div className="App section-principal">
           <SectionNavbar/>
           
      </div>
      <div className="section-secundaria">
      <Switch>
      <Route path="/List" component={SectionList}/>
           <Route path="/home" exact  component={SectionMain}/>
            
           </Switch>
          
      </div>
      <div className="section-final">
      <SectionFotter/>
      </div>
       </Router>
      
      );
    
}
export default App;