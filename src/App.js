import './App.css';
import React from "react";
import WeatherForecast from "./components/WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <WeatherForecast />
      <WeatherForecast />
      <WeatherForecast />
      <WeatherForecast />
      <WeatherForecast />
    </div>
  );
}
