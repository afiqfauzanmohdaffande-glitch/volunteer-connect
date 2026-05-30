import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import ForecastCard from './components/ForecastCard';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

export default function App() {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || 'demo';

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const fetchWeatherData = async (searchCity) => {
    setLoading(true);
    setError(null);
    try {
      // Current weather
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${API_KEY}`
      );
      
      if (!weatherResponse.ok) {
        throw new Error('City not found');
      }

      const weatherDataResult = await weatherResponse.json();
      setWeatherData(weatherDataResult);

      // 5-day forecast
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=metric&appid=${API_KEY}`
      );

      if (forecastResponse.ok) {
        const forecastDataResult = await forecastResponse.json();
        setForecastData(forecastDataResult);
      }

      setCity(searchCity);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchCity) => {
    if (searchCity.trim()) {
      fetchWeatherData(searchCity);
    }
  };

  // Get daily forecast (one per day)
  const getDailyForecast = () => {
    if (!forecastData) return [];
    
    const dailyData = {};
    forecastData.list.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!dailyData[date]) {
        dailyData[date] = item;
      }
    });

    return Object.values(dailyData).slice(1, 6); // Next 5 days
  };

  return (
    <div className="app-container">
      <div className="weather-dashboard">
        <h1 className="app-title">Weather Dashboard 🌤️</h1>
        
        <SearchBar onSearch={handleSearch} />

        {loading && <LoadingSpinner />}

        {error && (
          <div className="error-message">
            ��️ {error}
          </div>
        )}

        {weatherData && (
          <>
            <CurrentWeather data={weatherData} />

            {forecastData && (
              <div className="forecast-section">
                <h2 className="forecast-title">5-Day Forecast</h2>
                <div className="forecast-container">
                  {getDailyForecast().map((day, index) => (
                    <ForecastCard key={index} data={day} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <footer className="app-footer">
          <p>Weather data powered by OpenWeatherMap</p>
        </footer>
      </div>
    </div>
  );
}
