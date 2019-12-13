import React from 'react';

class  SectionNavbar extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar navbar-top">
                <a className="navbar-brand" href=" / ">
                <img className="logo-wo" src="./imagen/logo_wo.png" />
                </a>
                <div className="navbar-nav-scroll">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                <li className="nav-item pl-2 pr-5">
                    <a href=" # " className="nav-link plan ">Planes de Celular </a>
                </li>
                <div className="search"></div>
                
                </ul>
                </div>
                <a href=" # "  className="btn btn-bd-download offset-md-6 d-lg-inline-block">Download</a>
                </div>
        )
    }
       
}

export default SectionNavbar;