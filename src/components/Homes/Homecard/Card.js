import React from 'react';
import SvgComponent from "../../../hoc/SVGcomponents/SVGcomponents";



const Card = (props) =>{
    return(
        <div className="home">
            <img src={props.image} alt={`House ${props.id}`} className="home__img"/>
            <SvgComponent name="heart"/>
            <h5 className="home__name">{props.header}</h5>
            <div className="home__location">
                <SvgComponent name="location"/>
                <p>{props.location}</p>
            </div>
            <div className="home__rooms">
                <SvgComponent name="user"/>
                <p>{`${props.room} rooms`}</p>
            </div>
            <div className="home__area">
                <SvgComponent name="enlarge"/>
                <p>{`${props.area} m`}<sup>2</sup></p>
            </div>
            <div className="home__price">
                <SvgComponent name="key"/>
                <p>{`${props.price} $`}</p>
            </div>
            <button className="btn home__btn">Contact realtors</button>
        </div>
    )
};

export default Card;