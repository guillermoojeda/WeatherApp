import React from 'react';
import { Link } from "react-router-dom";

import s from './styles/Card.module.css';

//var props = {max : "max", min : "min", name : "name", img : "img", onClose : "onClose"}

export default function Card(props) {
    // acá va tu código
    var imgNumber = props.img;
    var url = `http://openweathermap.org/img/wn/${imgNumber}@2x.png`;
    console.log("props es:")
    console.log(props)

    // {`${e.cardContainer}`}

    return (
        <div className={s.cardContainer}>

            <div className={s.cityName}>
                <h3>
                    <Link to={`/ciudad/${props.id}`} className='cityTitle' >
                        {props.name}
                    </Link>
                    <button onClick={props.onClose} className="btn btn-sm btn-danger btn1">X</button>

                </h3>
            </div>

            <div>
                <p className={s.tempMax}>Max: {props.max}ºC</p>
                <p className={s.tempMin}>Min: {props.min}ºC</p>
                <img src={url} alt={imgNumber} />
            </div>

            <div>
                <p className={s.wind}> Wind: {props.wind} m/s</p>
            </div>


        </div>
    )
};