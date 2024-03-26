// import React, { useEffect, useState } from 'react';
// import { fetchWeatherApi } from 'openmeteo';
// import CustomSkeleton from './CustomSkeleton'; // Adjust the import path as necessary

// export default function WeatherChart() {
//  const [weatherData, setWeatherData] = useState(null);
//  const [error, setError] = useState(null);

//  useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const params = {
//           "latitude": 52.52,
//           "longitude": 13.41,
//           "hourly": "temperature_2m"
//         };
//         const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";
//         const responses = await fetchWeatherApi(url, params);

//         const response = responses[0];
//         const utcOffsetSeconds = response.utcOffsetSeconds();
//         const hourly = response.hourly();

//         const weatherData = {
//           hourly: {
//             time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
//               (t) => new Date((t + utcOffsetSeconds) * 1000)
//             ),
//             temperature2m: hourly.variables(0).valuesArray(),
//           },
//         };

//         setWeatherData(weatherData);
//       } catch (error) {
//         console.error("Failed to fetch weather data:", error);
//         setError(error);
//       }
//     };

//     fetchWeather();
//  }, []);

//  const range = (start, stop, step) =>
//     Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

//  if (error) {
//     return <div>Error: {error.message}</div>;
//  }

//  return (
//     <div>
//       <h1>Weather Chart</h1>
//       {weatherData ? (
//         weatherData.hourly.time.map((time, index) => (
//           <div key={index}>
//             <p>{time.toISOString()}: {weatherData.hourly.temperature2m[index]}°C</p>
//           </div>
//         ))
//       ) : (
//         <CustomSkeleton />
//       )}
//     </div>
//  );
// }
