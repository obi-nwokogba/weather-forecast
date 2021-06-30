import React from "react";

export default function WeatherForecast(props) {
    return (
        <div className="weather">
            <img src={props.img} alt="alt"/>
            <p>conditions:</p>
            <p>{props.conditions}</p>
            <p>time:</p>
            <p>{props.time}</p>
        </div>
    );
}
