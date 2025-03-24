import React, { useState } from 'react';
import axios from 'axios';
import { Cloud } from 'lucide-react';
import { WeatherData } from './types';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const API_KEY = 'f00c38e0279b7bc85480c3fe775d518c';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col items-center py-12 px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Cloud className="text-white" size={32} />
          <h1 className="text-3xl font-bold text-white">Weather Dashboard</h1>
        </div>

        <SearchBar onSearch={fetchWeather} />

        {loading && (
          <div className="text-center mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {weatherData && !loading && (
          <div className="mt-8">
            <WeatherCard data={weatherData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;