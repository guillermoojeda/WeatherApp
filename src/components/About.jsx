import React from "react";

import s from './styles/About.module.css';

export default function About() {
    return (
        <div>
            <div className={s.mainContainer} >
                <h2>Acerca de este proyecto</h2>
                <p>Este es un proyecto de muestra elaborado con Javascript y React. Funciona haciendo llamado a API del sitio web <a href="https://openweathermap.org/">OpenWeather </a>
                    buscando datos climáticos y mostrándolos aquí.</p>
                <h2>Instrucciones</h2>
                <p>En la sección WeatherApp, coloque el nombre de una ciudad en el campo vacío de la parte superior
                    derecha. Al presionar el botón "Agregar", se buscarán los datos climáticos actuales en OpenWeather.com
                    y se mostrarán en la pantalla. Los datos de la ciudad se muestran en una tarjeta.Es posible mostrar
                    datos de más de una ciudad a la vez.Para retirar los datos de una ciudad, presionar la "X" con fondo rojo
                    en la tarjeta de la ciudad correspondiente.
                </p>
                <h2>Acerca de mí</h2>
                <p>Mi nombre es Guillermo Ojeda. Soy estudiante de programación Full-Stack en <a href="https://www.soyhenry.com/">SoyHenry</a> y actualmente
                    estoy buscando dedicarme profesionalmente al rubro de tecnología. Disfruto mucho la programación web y la programación en general.También poseo
                    conocimientos en Ciencia de Datos y Sistemas de Información Geográficos. Antes de dedicarme a la programación, trabajé en los rubros de agroindustrias
                    y medio ambiente.</p>
                <h2>Información de contacto: </h2>
                <ul>
                    <li>Email: <a href="mailto:guiojeda@gmail.com">guiojeda @gmail.com</a></li>
                    <li>GitHub: <a href="https://github.com/guillermoojeda">https://github.com/guillermoojeda</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/guillermo-francsico-ojeda/">https://www.linkedin.com/in/guillermo-francsico-ojeda/</a></li>
                    <li>Blog: <a href="https://guiojdata.wordpress.com/">https://guiojdata.wordpress.com/</a></li>

                </ul>
            </div>
        </div>
    )
}