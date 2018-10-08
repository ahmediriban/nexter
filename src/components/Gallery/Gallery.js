import React, { Component } from 'react';
import Image from "./Image/Image";

import img1 from '../../assets/images/gal-1.jpeg';
import img2 from '../../assets/images/gal-2.jpeg';
import img3 from '../../assets/images/gal-3.jpeg';
import img4 from '../../assets/images/gal-4.jpeg';
import img5 from '../../assets/images/gal-5.jpeg';
import img6 from '../../assets/images/gal-6.jpeg';
import img7 from '../../assets/images/gal-7.jpeg';
import img8 from '../../assets/images/gal-8.jpeg';
import img9 from '../../assets/images/gal-9.jpeg';
import img10 from '../../assets/images/gal-10.jpeg';
import img11 from '../../assets/images/gal-11.jpeg';
import img12 from '../../assets/images/gal-12.jpeg';
import img13 from '../../assets/images/gal-13.jpeg';
import img14 from '../../assets/images/gal-14.jpeg';

class Gallery extends Component{
    state={
        images : [
            {
                id: 1,
                image : img1
            },
            {
                id: 2,
                image : img2
            },
            {
                id: 3,
                image : img3
            },
            {
                id: 4,
                image : img4
            },
            {
                id: 5,
                image : img5
            },
            {
                id: 6,
                image : img6
            },
            {
                id: 7,
                image : img7
            },
            {
                id: 8,
                image : img8
            },
            {
                id: 9,
                image : img9
            },
            {
                id: 10,
                image : img10
            },
            {
                id: 11,
                image : img11
            },
            {
                id: 12,
                image : img12
            },
            {
                id: 13,
                image : img13
            },
            {
                id: 14,
                image : img14
            }
        ]
    };

    render(){
        return (
            <section className="gallery">
                {
                    this.state.images.map(img=>{
                        return <Image
                            id={img.id}
                            image={img.image}
                        />
                    })
                }
            </section>
        )
    }
}

export default Gallery;