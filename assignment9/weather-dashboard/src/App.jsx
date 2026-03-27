import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('London')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY

  async function getWeather(event) {
    event.preventDefault()

    if (!apiKey) {
      setError('Missing API key. Add VITE_WEATHER_API_KEY in your .env file.')
      setWeather(null)
      return
    }

    if (!city.trim()) {
      setError('Please enter a city name.')
      setWeather(null)
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city.trim())}&aqi=no`
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error?.message || 'Unable to fetch weather data.')
      }

      setWeather(data)
    } catch (err) {
      setWeather(null)
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="card">
        <h1>Weather Dashboard</h1>
        <p className="subtitle">Get current weather by city</p>

        <form className="search-form" onSubmit={getWeather}>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Enter city name"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Search'}
          </button>
        </form>

        {error && <p className="status error">{error}</p>}

        {loading && <p className="status">Fetching weather data...</p>}

        {weather && !loading && (
          <div className="weather-box">
            <h2>
              {weather.location.name}, {weather.location.country}
            </h2>
            <p className="temp">{weather.current.temp_c}°C</p>
            <p className="condition">{weather.current.condition.text}</p>

            <div className="details">
              <p>Feels like: {weather.current.feelslike_c}°C</p>
              <p>Humidity: {weather.current.humidity}%</p>
              <p>Wind: {weather.current.wind_kph} kph</p>
              <p>Local time: {weather.location.localtime}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App