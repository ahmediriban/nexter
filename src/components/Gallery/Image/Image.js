import React from 'react';


const Image = (props) =>{
    return(
        <figure className={`gallery__item gallery__item--${props.id}`}>
            <img src={props.image} alt={`Gallery img ${props.id}`} className="gallery__img"/>
        </figure>
    )
};

export default Image;