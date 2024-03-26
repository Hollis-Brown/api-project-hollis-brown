import React, { useState } from "react";

export default function HourlyWeatherCard() {
  const [currentHourIndex, setCurrentHourIndex] = useState(0); // State to track current hour index

  // Data for the hourly weather, replace with your actual data
  const hourlyWeatherData = [
    { time: "3 PM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "4 PM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "5 PM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "6 PM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "7 PM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "8 PM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "9 PM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "10 PM", temp: "31", flTemp: "25", wind: "26", precip:"0" },
    { time: "11 PM", temp: "31", flTemp: "25", wind: "26", precip:"0" },
    { time: "12 AM", temp: "31", flTemp: "25", wind: "26", precip:"0" },
    { time: "1 AM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "2 AM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "3 AM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "4 AM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "5 AM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "6 AM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "7 AM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "8 AM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "9 AM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "10 AM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "11 AM", temp: "31", flTemp: "25", wind: "26", precip:"0" },
    { time: "12 PM", temp: "31", flTemp: "25", wind: "26", precip:"0" },
    { time: "1 PM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
    { time: "2 PM", temp: "31", flTemp: "25", wind: "26", precip: "0" },
  ];

  // Function to handle next hour
  const nextHour = () => {
    setCurrentHourIndex((prevIndex) =>
      prevIndex === hourlyWeatherData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous hour
  const previousHour = () => {
    setCurrentHourIndex((prevIndex) =>
      prevIndex === 0 ? hourlyWeatherData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="current-weather-container flex justify-center mt-3 ">
        <div className="current-weather-card flex transition shadow-xl 5 rounded-xl max-w-lg bg-sky-300">
          <table className="hour-section">
          <tbody data-hour-section>
            {/* Show current hour */}
            <tr className="hour-row">
              <td>
                <div className="info-group">
                  <div className="label">Thursday</div>
                  <div>{hourlyWeatherData[currentHourIndex].time}</div>
                </div>
              </td>
              {/* Render other hourly data */}
              <td>
                <img src="src/images/cloud.svg" className="weather-icon" />
              </td>
              <td>
                <div className="info-group">
                  <div className="label">Temp</div>
                  <div>{hourlyWeatherData[currentHourIndex].temp}&deg;</div>
                </div>
              </td>
              <td>
                <div className="info-group">
                  <div className="label">FL Temp</div>
                  <div>{hourlyWeatherData[currentHourIndex].flTemp}&deg;</div>
                </div>
              </td>
              <td>
                <div className="info-group">
                  <div className="label">Wind</div>
                  <div>
                    {hourlyWeatherData[currentHourIndex].wind}
                    <span className="value-sub-info">mph</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="info-group">
                  <div className="label">Precip</div>
                  <div>
                    {hourlyWeatherData[currentHourIndex].precip}
                    <span className="value-sub-info">in</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
          </div>
        </div>
      
      
  



      {/* Pagination with fraction counter */}
      <div className="pagination inline-flex items-center justify-center gap-3">
        <button
          onClick={previousHour}
          className="inline-flex size-10 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 mt-2"
        >
          <span className="sr-only">Previous Hour</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <p className="text-xs text-gray-900">
          {currentHourIndex + 1}/{hourlyWeatherData.length}
        </p>
        <button
          onClick={nextHour}
          className="inline-flex size-10 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 mt-2"
        >
          <span className="sr-only">Next Hour</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
