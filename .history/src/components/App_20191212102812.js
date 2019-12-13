import React from 'react';
import SectionFotter from './Footer';
import SectionMain from './Main';

import "../css/App.css";
import SectionList from './ListViw';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SectionListCenter from './ListCenter';
import { callbackify } from 'util';

class App extends Component {
    render() {
        return (

            <Router path="/home" exact component={SectionMain} >
    
                <div className="App">
                <Route path="/List">
                    <SectionList/>
                </Route>
                </div>
                <div className="App " >
                   <Route path="/home" component={SectionMain}/>
                </div>
                <div className="section-secundaria">
                    <Switch>
                        <div className="col-lg-12">
                            <Route path="/List">
                                <SectionListCenter/>
                            </Route>
                        </div>
                    </Switch>
                </div>
                <Route path="/List">
                    <div className="resut">
                        <button type="button " className="btn btn-danger btn-sm btn-result">Màs resultados</button>
                        <div className="resits-mobile">
                            <button type="button " className="btn btn-danger btn-sm btn-result-mobile">
                                <i className="fa fa-arrow-up"></i>
                            </button>
                            <p>Màs resultados</p>
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

