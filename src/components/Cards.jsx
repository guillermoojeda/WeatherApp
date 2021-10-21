import React from 'react';
import Card from './Card.jsx';
import e from "./styles/Cards.module.css"

export default function Cards({ cities, onClose }) {
    console.log(cities);
    if (cities.length > 0) {
        return (
            <div className={e.CardsContainer}>
                {
                    cities && cities.map(city => (
                        <Card
                            name={city.name}
                            max={city.max}
                            min={city.min}
                            img={city.img}
                            onClose={() => onClose(city.id)}
                            wind={city.wind}
                            key={city.id}></Card>
                    ))
                }

            </div>
        )
    } else {
        return (
            <div className={e.message}>
                <p>No cities selected.</p>
                <p>Search a city by name in the search bar at the top right and
                    click "Add city".
                </p>
            </div>
        )
    }
};