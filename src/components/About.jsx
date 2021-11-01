import React from "react";

import s from './styles/About.module.css';

export default function About() {
    return (
        <div>
            <div className={s.mainContainer} >
                <h2>About this project</h2>
                <p>This is a sample project made with Javascript and React. It makes API calls to the site <a href="https://openweathermap.org/">OpenWeatherMap </a>
                    to obtain weather data for a given city and showing it here.</p>
                <h2>Instructions</h2>
                <p>At the "WeatherApp" tab, type the name of a city of interest in the empty field at the top-right.
                    When pressing "Add City", a small card will be shown in the screen containing the current weather
                    data for that city, according to OpenWeatherMap.com. It is possible to show more than one card at
                    a time. To remove a city card from view, press the "X" on the top-right corner of that card.
                </p>
                <h2>About me</h2>
                <p>I am Guillermo Ojeda. I recently fineished my Full-Stack course at <a href="https://www.soyhenry.com/">SoyHenry</a> and I am looking for a job
                    in the field of technology. I enjoy web development a lot and programming in general.  I also have knowledges in Data Sciences and Geographic Information Systems.
                    Before dedicating to programming, I worked in the field of agricuture industries and environmental engineering.</p>
                <h2>Contact info: </h2>
                <ul>
                    <li>Email: <a href="mailto:guiojeda@gmail.com">guiojeda @gmail.com</a></li>
                    <li>GitHub: <a href="https://github.com/guillermoojeda">https://github.com/guillermoojeda</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/guillermo-francsico-ojeda/">https://www.linkedin.com/in/guillermo-francsico-ojeda/</a></li>
                    <li>Data blog: <a href="https://guiojdata.wordpress.com/">https://guiojdata.wordpress.com/</a></li>

                </ul>
            </div>
        </div>
    )
}