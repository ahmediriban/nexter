import React,{ Component } from 'react';
import Card from "./Homecard/Card";

import home1 from '../../assets/images/house-1.jpeg';
import home2 from '../../assets/images/house-2.jpeg';
import home3 from '../../assets/images/house-3.jpeg';
import home4 from '../../assets/images/house-4.jpeg';
import home5 from '../../assets/images/house-5.jpeg';
import home6 from '../../assets/images/house-6.jpeg';

class Homes extends Component{
    state={
        cards : [
            {
                id: 1,
                image : home1,
                header: 'Beautiful Family House',
                location: 'USA',
                room: 5,
                area: 325,
                price: '1,200,000',
            },
            {
                id: 2,
                image : home2,
                header: 'Moder Glass Villa',
                location: 'Canada',
                room: 6,
                area: 450,
                price: '2,750,000',
            },
            {
                id: 3,
                image : home3,
                header: 'Cozy Country House',
                location: 'UK',
                room: 4,
                area: 250,
                price: '850,000',
            },
            {
                id: 4,
                image : home4,
                header: 'Large Rustical Villa',
                location: 'Portugal',
                room: 6,
                area: 480,
                price: '1,950,000',
            },
            {
                id: 5,
                image : home5,
                header: 'Majestic Palace House',
                location: 'Germany',
                room: 18,
                area: 4230,
                price: '9,500,000',
            },
            {
                id: 6,
                image : home6,
                header: 'Modern Family Apartment',
                location: 'Italy',
                room: 3,
                area: 180,
                price: '600,000',
            }
        ]
    };

    render(){
        return (
            <section className="homes">
                {
                    this.state.cards.map(card=>{
                        return <Card
                            id={card.id}
                            image={card.image}
                            header={card.header}
                            location={card.location}
                            room={card.room}
                            area={card.area}
                            price={card.price}
                        />
                    })
                }
            </section>
        )
    }
}

export default Homes;