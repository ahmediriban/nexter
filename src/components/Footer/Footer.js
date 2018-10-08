import React from 'react';

const Footer = (props) =>{
    return (
        <footer className="footer">
            <ul className="nav">
                <li className="nav__item"><a href="#" className="nav__link">Find your dream home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Request personal</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Download home planner</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact us</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Submit your property</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Come work with us</a></li>
            </ul>
            <p className="copyright">
                &copy; Copyright 2018 by Jonas Schmedtmaan. Feel free to use this project for your own purposes. This dose NOT apply if you plan to produce your own courses or tutorial based on this project.
            </p>
        </footer>
    )
};

export default Footer;