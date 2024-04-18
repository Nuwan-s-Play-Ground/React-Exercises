import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'your actual API key'; // Replace with your actual API key

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityName = 'London'; // Replace with your desired city
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Weather Data</h1>
      <div>
      <h1>Weather Data for {data.name}</h1>
      <div>
        <p>Temperature: {data.main.temp}°C</p>
        <p>Description: {data.weather[0].description}</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>
      </div>
    </div>
    </div>
  );
}

export default FetchData;
