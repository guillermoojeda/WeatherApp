import React, { useState } from 'react';
import s from "./styles/SearchBar.module.css"

export default function SearchBar(props) {

    const [city, setCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.onSearch(city);
        setCity("");
    }

    return (
        <div>

            <form onSubmit={handleSubmit} className={s.form}>
                <input
                    className={s.inp}
                    placeholder="Add City..."
                    value={city}
                    onChange={e => setCity(e.target.value)}>
                </input>
                <input type="submit" value="Add city" className="btn1" />
            </form>


        </div>
    );
};