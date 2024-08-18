/* File : src/App.js*/

import React, { useState } from 'react';
import './App.css';

const WeatherApp = () => {
    // State to store the city input and weather data
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    // Function to fetch weather data from the weatherapi.com API
    const fetchWeatherData = async () => {
        // Implement API call to fetch weather data 
        // using a service of weatherapi.com
        // Replace the API_KEY with your actual API key
        const API_KEY = 'e371c0427a114869b17121533241808';
        const API_ENDPOINT =
`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

        try {
            // Fetch weather data from the API
            const response = await fetch(API_ENDPOINT);
            const data = await response.json();

            // Update the state with the fetched weather data
            setWeatherData(data);

            // Log the data to the console (for debugging purposes)
            console.log(data);
        } catch (error) {
            // Handle errors in fetching weather data
            console.error('Error fetching weather data:', error);
        }
    };
    // JSX structure for the Weather App component
    return (
        <div className="h-screen flex flex-col 
            items-center justify-center bg-green-400">
            <div className="bg-white p-8 rounded shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-4">
                    Weather App
                </h2>
                {/* Input field for entering the city name */}
                <input
                    type="text"
                    placeholder="Enter city name"
                    className="border p-2 w-full mb-4"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />
                {/* Button to trigger fetching weather data */}
                <button
                    className="bg-green-400 text-white p-2 rounded"
                    onClick={fetchWeatherData}>
                    Get Weather
                </button>
            </div>
            {/* Display weather information if data is available */}
            {weatherData && (
                <div className="bg-white p-8 rounded shadow-md">
                    <div className="mt-4">
                        {/* Display location and country */}
                        <h3 className="text-xl font-semibold mb-2">
                            Weather in {weatherData.location.name},
                            {weatherData.location.country}
                        </h3>
                        {/* Display current weather conditions */}
                        <p>
                            Condition: 
                            {weatherData.current.condition.text}
                        </p>
                        {/* Display current temperature */}
                        <p>
                            Temperature: 
                            {weatherData.current.temp_c}°C
                        </p>
                        {/* Display "feels like" temperature */}
                        <p>
                            Feels Like: 
                            {weatherData.current.feelslike_c}°C
                        </p>
                        {/* Display wind information */}
                        <p>
                            Wind: {weatherData.current.wind_kph}
                            KMH in {weatherData.current.wind_dir} Direction
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
