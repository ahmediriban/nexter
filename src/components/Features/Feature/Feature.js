import React from 'react';
import SvgComponent from "../../../hoc/SVGcomponents/SVGcomponents";

const Feature = (props) =>{
    return(
        <div className="feature">
            <SvgComponent name={props.svg}/>
            <h4 className="heading-4 heading-4--dark">{props.header}</h4>
            <p className="feature__paragraph">{props.paragraph}</p>
        </div>
    )
};

export default Feature;