import './App.css';
import React from "react";
import WeatherForecast from "./components/WeatherForecast";
import WeatherData from "./weatherData";

export default function App() {

  /*
  const fiveDayForecast = []

  for (let i=0; i < WeatherData.length; i++) {
  fiveDayForecast.push(<WeatherForecast img="{WeatherData[i].img}" conditions="${WeatherData.i.conditions}" time="{WeatherData.i.time}" />);
  } */

  console.log()
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <div class="forecastContainer">
        {WeatherData.map((day) => (
          <WeatherForecast img={day.img} conditions={day.conditions} time={day.time} />
        ))}

      </div>



    </div>
  );
}
