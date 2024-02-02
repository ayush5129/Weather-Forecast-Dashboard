import sunnyBg from "./assets/sunny-weather.jpg";
import coldBg from "./assets/cold1-weather.webp";
import WeatherDesc from "./components/WeatherDesc";
import { useEffect, useState } from "react";
import { weatherData } from './weatherCondition'
function App() {
  const [city, setCity] = useState("paris");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [bg, setBg] = useState(sunnyBg);
  useEffect(() => {
    const fetchData = async () => {
      const data = await weatherData(city, units);
      setWeather(data);

      const thresold = units === "metric" ? 20 : 60;
      if (data.temp <= thresold) setBg(coldBg);
      else setBg(sunnyBg);
    };
    fetchData();
  }, [units, city]);
  const handleUnits = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelcius = currentUnit === "C";
    button.innerText = isCelcius ? "°F" : "°C";
    setUnits(isCelcius ? "metric" : "imperical");
  };
  const handleInput = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }
  return (
    <div className="content" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
              <div className="input input_Fahren">
                <input onKeyDown={handleInput} type="text" name="city" placeholder="Enter city name" />
                <button onClick={(e) => handleUnits(e)} >°F</button>
              </div>
              <div className="input input_Celcius">
                <div className="description">
                  <h3>{`${weather.name},${weather.country}`}</h3>
                  <img src={weather.icon_URL} alt="weather-icon" />
                  <h3>{weather.description}</h3>
                </div>
                <div className="temp">
                  <h2>{`${weather.temp.toFixed()} °${units === 'metric' ? 'C' : 'F'}`}</h2>
                </div>
              </div>
              <WeatherDesc weather={weather} units={units} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
