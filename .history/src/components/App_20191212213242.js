import React from 'react';
import SectionFotter from './Footer';
import SectionMain from './Main';

import "../css/App.css";
import SectionList from './ListViw';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SectionListCenter from './ListCenter';
import { callbackify } from 'util';

class App extends  React.Component  {
    callbackFunction = (childData) => {
        console.log("parent sss",childData)
        this.refs.child.clearAllResults(childData)
  }

  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
    render() {
        return (

            <Router path="/" exact component={SectionMain} >
            <Route path='/'>
                <Redirect to="/something" />
                </Route>
                <div className="App">
                <Route path="/List">
                    <SectionList parentCallback = {this.callbackFunction} data="dddddd"/>
                </Route>
                <Route path="/home" component={SectionMain}/>
                </div>
                <Route path="/List">
                <div className="section-secundaria">
                    <SectionListCenter ref="child" />
                    <div className="resut">
                        <button type="button " className="btn btn-danger btn-sm btn-result">Màs resultados</button>
                        <div className="resits-mobile">
                            <button type="button " className="btn btn-danger btn-sm btn-result-mobile">
                                <i className="fa fa-arrow-up"></i>
                            </button>
                            <p>Màs resultados</p>
                        </div>
                    </div>
                    </div>
                </Route>
           
               
    
                <div className="footer">
                    <SectionFotter/>
                </div>
    
            </Router>
    
        );
    }
  }
  
  export default App;

