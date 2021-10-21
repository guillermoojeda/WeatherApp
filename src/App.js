import React, { useState } from 'react';
import Nav from './components/Nav.jsx';
import './styles/App.css';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx'
import data from './data.js';
import { Route } from 'react-router-dom';


//data es un Array con 3 objetos.
console.log(data.cities)
console.log(data)
console.log(Array.isArray(data))
console.log(data[0].name)
console.log({ data })
console.log(typeof (data))
console.log(typeof ({ data }))

const apiKey = process.env.REACT_APP_API_KEY;

function App() {

    const [cities, setCities] = useState([]);

    function onSearch(ciudad) {
        //Llamado a la API del clima
        console.log("api key")
        console.log(apiKey)
        console.log(process.env)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
            .then(r => r.json())
            .then((answer) => {
                console.log(answer);
                if (answer.main !== undefined) {
                    const ciudad = {
                        min: Math.round(answer.main.temp_min),
                        max: Math.round(answer.main.temp_max),
                        img: answer.weather[0].icon,
                        id: answer.id,
                        wind: answer.wind.speed,
                        temp: answer.main.temp,
                        name: answer.name,
                        weather: answer.weather[0].main,
                        clouds: answer.clouds.all,
                        latitud: answer.coord.lat,
                        longitud: answer.coord.lon,
                    };
                    const ciudadEncontrada = cities.find((city) => city.id === answer.id);
                    if (!ciudadEncontrada) {
                        setCities(prevCities => [...prevCities, ciudad]);
                    } else {
                        alert("Ya buscaste esta ciudad");
                    }

                } else {
                    alert("Ciudad no encontrada");
                }
            });
    }

    function onClose(id) {
        setCities(cities => cities.filter(c => c.id !== id));
    }


    function onFilter(ciudadId) {
        let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
        if (ciudad.length > 0) {
            return ciudad[0];
        } else {
            return null;
        }
    }

    return (
        <div className="App">
            <Route
                path='/'
                render={() => <Nav onSearch={onSearch} />}
            />
            <Route
                exact path='/about'
                component={About}
            />

            <Route
                exact path='/'
                render={() =>
                    <Cards cities={cities} onClose={onClose} />
                }
            />
        </div>
    );
}

export default App;
