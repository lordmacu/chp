import React from 'react';


class SectionNavbar extends React.Component {
    render() {
        return (
            <div className='elige-mobile-position '>
           <nav className="navbar navbar-expand-lg  navbar">
           <a className="navbar-brand display-on-in-desktop nav-title" href=" # " path="/home" >COMPARADOR DE PLANES</a>
           <a className="navbar-brand display-on-in-mobile title-mobile" href=" # ">CP</a>
                <button className="display-on-in-mobile" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-one"> <i className="fa fa-bars"></i></span>
                </button>
                

                <div className="collapse navbar-collapse nav-collapse-decktop button" id="navbarTogglerDemo03">
                        <ul className="icons-rigth  ml-md-auto d-md-flex display-on-in-desktop" id="menu">
                      <li><img alt=" " src="./imagen/twtt.png"/></li> 
                      <li><img alt=" " src="./imagen/intsa.png"/></li>
                      <li><img alt=" " src="./imagen/link.png"/></li>
                      </ul> 
                  
                </div>
                <div className="collapse navbar-collapse collapse-mobile" id="navbarTogglerDemo03">
                 <ul className="display-on-in-mobile icons-rigth">
                  <li><img alt=" " src="./imagen/twtt.png"/></li> 
                      <li><img alt=" " src="./imagen/intsa.png"/></li>
                      <li><img alt=" " src="./imagen/link.png"/></li>
                  </ul>
                </div>
                </nav>
            </div>
        )
    }

}

export default SectionNavbar;