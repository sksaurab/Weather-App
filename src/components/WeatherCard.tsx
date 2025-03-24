import React from 'react';
import { WeatherData } from '../types';
import { Thermometer, Droplets, Wind, Gauge } from 'lucide-react';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="w-16 h-16"
        />
      </div>
      
      <div className="mb-4">
        <div className="text-5xl font-bold text-gray-900 mb-2">
          {Math.round(data.main.temp)}°C
        </div>
        <p className="text-gray-600 capitalize">{data.weather[0].description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Thermometer className="text-blue-500" size={20} />
          <div>
            <p className="text-sm text-gray-500">Feels like</p>
            <p className="font-semibold">{Math.round(data.main.feels_like)}°C</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Droplets className="text-blue-500" size={20} />
          <div>
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="font-semibold">{data.main.humidity}%</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Wind className="text-blue-500" size={20} />
          <div>
            <p className="text-sm text-gray-500">Wind Speed</p>
            <p className="font-semibold">{data.wind.speed} m/s</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Gauge className="text-blue-500" size={20} />
          <div>
            <p className="text-sm text-gray-500">Pressure</p>
            <p className="font-semibold">{data.main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;