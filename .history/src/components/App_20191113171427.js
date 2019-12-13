import React from 'react';
import SectionFotter from './Footer';
import SectionMain from './Main';
import SectionNavbar from './Navbar';
import "../css/App.css";
import SectionList from './ListViw';
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";




function App(){
     return (
       <Router path="/home" exact  component={SectionMain}>
         <Redirect to="/home"/>
           <div className="App section-principal">
           <SectionNavbar/>
           <Switch>
           <Route path="/home" exact  component={SectionMain}/>
             <Route path="/List" component={SectionList}/>
           </Switch>
           <SectionFotter/>
      </div>
       </Router>
      
      );
    
}
export default App;