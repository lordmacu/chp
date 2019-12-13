import React from 'react';
import {Link} from "react-router-dom";

class SectionNavbar extends React.Component {
    render() {
        return (
            <div
                className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar navbar-top">
              
                <Link className="navbar-brand" to='/home'>
                <img className="logo-wo display-on-in-desktop" src="./imagen/logo_wo.png" alt=" "/>
                        </Link>
                    
               
                <div className="navbar-nav-scroll">
                    <ul className="navbar-nav bd-navbar-nav flex-row">
                        <Link to='/list'>
                            <li className="nav-item pl-2 pr-4 plan">
                                Planes de Celular
                            </li>
                        </Link>

                        <div className="search"></div>

                    </ul>
                </div>
                <a href=" # " className="btn btn-bd-download offset-md-6 d-lg-inline-block">ComoFunciona</a>
            </div>
        )
    }

}

export default SectionNavbar;