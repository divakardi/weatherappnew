
// export default App;
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Current from './Components/Current';
import Forecast from './Components/Forecast';
//import forecast from './Components/Forecast';
import '../node_modules/bootstrap/dist/js/bootstrap';


function App() {

  const [city, setCity] = useState();
  const [clickedcity, setClickedCity] = useState();
  const [citySuggestion, setCitySuggestion] = useState([]);
  const [currentWeather, setCurrent] = useState();
  const [ForecastWeather, setForecast] = useState();
  const [location, setLocation] = useState();

  const autoCompURL = "https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=";
  const WeatherURL = (city) => `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`;

  useEffect(() => {
    if (city) {
      fetchAutoCompAPI();
    }
  }, [city]);

  // Function to fetch city suggestions   
  const fetchAutoCompAPI = async () => {
    try {
      const response = await axios.get(autoCompURL + city);
      const resp = response.data;

      const cityData = resp.map((data) => {
        return `${data.name}, ${data.region}, ${data.country}`;
      });

      setCitySuggestion(cityData);
    } catch (e) {
      console.log('error', e);
    }
  };
  const fetchWeatherAPI = async (selectedCity) => {
    try {
      const response = await axios.get(WeatherURL(selectedCity));
      const resp = response.data;
  
      setCurrent(resp.current);
      setForecast(resp.forecast); // Corrected to match the API response
      setLocation(resp.location);
  
      console.log('Current', resp.current);
      console.log('forecast', resp.forecast);
      console.log('Location', resp.location);
  
      console.log("Weather Data:", resp);
    } catch (e) {
      console.log("weather api error", e);
    }
  };
  // Function to fetch weather data for a selected city  

  const handleSelectedCity = (selectedCity) => {//selected
    console.log('Selected city:', selectedCity);//
    setClickedCity(city)
    fetchWeatherAPI(selectedCity);//
    setCitySuggestion([])
  };

  return (
    <div className="container bg-primary p-5 rounded mt-5">
      <input
        type="text"
        value={clickedcity}
        className="form-control"
        onChange={(e) => {
          setCity(e.target.value);
          if(e.target.value===""){
            setCurrent();
            setForecast();
            setLocation();
            setClickedCity();
          }
        }}
      />
      
      {citySuggestion && citySuggestion.map((data, index) => (
        <div
          key={index}
          className="text-center bg-info rounded p-1 bg-opacity-10 border border-info border-opacity-25 text-white"
          style={{ cursor: 'pointer' }}
          onClick={() => handleSelectedCity(data)}
        >
          {data}
        </div>
      ))}
      {/* Add Current component if you have one, or remove this line */}
       {currentWeather && <Current  currentWeather={currentWeather} location={location} />}
       {ForecastWeather && <Forecast forecastWeather={ForecastWeather} location={location} />}

       
    </div>
  );
}

export default App;
