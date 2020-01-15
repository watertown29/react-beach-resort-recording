import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from "react-icons/fa";

export default class Services extends Component { 
    state={
        services:[
            {
                icons:<FaCocktail />,
                title:"Free cocktails",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni'
            },{
                icons:<FaHiking />,
                title:"Endless Hiking",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni'
            },{
                icons:<FaShuttleVan />,
                title:"Free Shuttle",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni'
            },{
                icons:<FaBeer />,
                title:"Strongest Beer",
                info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Magni'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icons}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
