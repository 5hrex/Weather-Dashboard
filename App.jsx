import { useState } from "react";
import { getweather } from "./Components/getweather";
import "./App.css";

function App() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState(null);

  return (
    <div className="weather-box">
      <input
        type="text"
        value={city}
        onChange={(e) => setcity(e.target.value)}
        placeholder="Search city"
      />
      <button onClick={() => getweather(city, setweather)}>Search</button>
      {weather && (
        <div className="weather-details">
          <div className="weather-info">
            <div className="heading">
              <h2>{weather.name}</h2>
            </div>
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p id="des">{weather.weather[0].description}</p>
          </div>
          <div className="weather-temp">
            <p id="temp-text">temparature</p>
            <p id="temp">{weather.main.temp}°C</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
