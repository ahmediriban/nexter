import React,{ Component } from 'react';
import Feature from "./Feature/Feature";

class Features extends Component{
    state={
        features: [
            {
                svg: 'sphere',
                header: 'World\'s best luxury homes',
                paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.'
            },
            {
                svg: 'trophy',
                header: 'Only the best properties',
                paragraph: 'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.'
            },
            {
                svg: 'location',
                header: 'All homes in the top locations',
                paragraph: 'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.'
            },
            {
                svg: 'key',
                header: 'New home in one week',
                paragraph: 'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                svg: 'tv',
                header: 'Top 1% realtors',
                paragraph: 'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.'
            },
            {
                svg: 'lock',
                header: 'Secure payments on nexter',
                paragraph: 'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.\n'
            },
        ]
    };
    render(){
        return (
            <section className="features">
                {
                    this.state.features.map(feature =>{
                        return <Feature
                            svg={feature.svg}
                            header={feature.header}
                            paragraph={feature.paragraph}
                        />
                    })
                }
            </section>
        )}
}

export default Features;