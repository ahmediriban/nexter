import React from 'react';

import mainLogo from '../../assets/images/logo.png';
import logo1 from '../../assets/images/logo-bbc.png';
import logo2 from '../../assets/images/logo-bi.png';
import logo3 from '../../assets/images/logo-forbes.png';
import logo4 from '../../assets/images/logo-techcrunch.png';

const Header = (props) =>{
    return (
        <header className="header">
            <img src={mainLogo} alt="Nexter logo" className="header__logo"/>
            <h3 className="heading-3">Your own home:</h3>
            <h1 className="heading-1">The ultimate personal freedom</h1>
            <button className="btn header__btn">View our properties</button>
            <div className="header__seenon--text">Seen on</div>
            <div className="header__seenon--logos">
                <img src={logo1} alt="Seen on logo 1"/>
                <img src={logo2} alt="Seen on logo 2"/>
                <img src={logo3} alt="Seen on logo 3"/>
                <img src={logo4} alt="Seen on logo 4"/>
            </div>
        </header>
    )
};

export default Header;