import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Mysuru"); // Default city
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "93881faea77a74aac99217832ac5d03c";

  const fetchWeather = async (searchCity) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchWeather(city); }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input) {
      fetchWeather(input);
      setCity(input);
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="search-box">
          <input 
            type="text" 
            placeholder="Search city..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        {weather && !loading && !error && (
          <div className="content">
            <h1 className="city-name">{weather.name}</h1>
            <div className="temp-display">
              <span className="degree">{Math.round(weather.main.temp)}</span>
              <span className="unit">°C</span>
            </div>
            <p className="description">{weather.weather[0].description}</p>
            <div className="info-grid">
              <div className="item"><span>Humidity</span><p>{weather.main.humidity}%</p></div>
              <div className="item"><span>Wind</span><p>{weather.wind.speed} m/s</p></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;