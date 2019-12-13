import React from 'react';
import SectionFotter from './Footer';
import SectionMain from './Main';
import SectionNavbar from './Navbar';
import "../css/App.css";
import SectionList from './ListViw';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import SectionListCenter from './ListCenter';

function App() {
    return (

        <Router path="/home" exact component={SectionMain}>

            <div className="App section-principal">
                <SectionNavbar/>
                <Route path="/List" component={SectionList}/>
                <Route path="/home" component={SectionMain}/>
            </div>
            <div className="section-secundaria">
                <Switch>
                    <div className="col-lg-12">
                        <Route path="/List">
                            <SectionListCenter/>
                        </Route>

                    </div>
                    <div className="main">
                        <Route path="/home" exact component={SectionMain}/>
                    </div>

                </Switch>
            </div>
            <div className="resut">
                <button type="button " className="btn btn-danger btn-sm btn-result">Màs resultados</button>
                <div className="resits-mobile">
                    <button type="button " className="btn btn-danger btn-sm btn-result-mobile">
                        <i class="fa fa-arrow-up"></i>
                    </button>
                    <p>Màs resultados</p>
                </div>
            </div>
            <div className="footer">
                <SectionFotter/>
            </div>

        </Router>

    );

}
export default App;