import React from "react";

export default function DailyWeatherCard() {
  return (
    <>
      <div className="day-section-container flex justify-center mt-3 ">
        <div className="daily-weather-card flex transition shadow-xl 5 rounded-xl max-w-2xl bg-sky-300">
          <div className=" flex flex-1 flex-col justify-between">
            <img className="weather-icon" src="src/images/cloud.svg" />
            <div className="day-card-day">
              Monday
              <div className="daily-degrees">32&deg;</div>
            </div>
          </div>
        </div>
        <div className="daily-weather-card flex transition shadow-xl 5 rounded-xl max-w-2xl bg-sky-300">
          <div className=" flex flex-1 flex-col justify-between">
            <img className="weather-icon" src="src/images/cloud.svg" />
            <div className="day-card-day">
              Tuesday
              <div className="daily-degrees">32&deg;</div>
            </div>
          </div>
        </div>
        <div className="daily-weather-card flex transition shadow-xl 5 rounded-xl max-w-2xl bg-sky-300">
          <div className=" flex flex-1 flex-col justify-between">
            <img className="weather-icon" src="src/images/cloud.svg" />
            <div className="day-card-day">
              Wednesday
              <div className="daily-degrees">32&deg;</div>
            </div>
          </div>
        </div>
        <div className="daily-weather-card flex transition shadow-xl 5 rounded-xl max-w-2xl bg-sky-300">
          <div className=" flex flex-1 flex-col justify-between">
            <img className="weather-icon" src="src/images/cloud.svg" />
            <div className="day-card-day">
              Thursday
              <div className="daily-degrees">32&deg;</div>
            </div>
          </div>
        </div>
        <div className="daily-weather-card flex transition shadow-xl 5 rounded-xl max-w-2xl bg-sky-300">
          <div className=" flex flex-1 flex-col justify-between">
            <img className="weather-icon" src="src/images/cloud.svg" />
            <div className="day-card-day">
              Friday
              <div className="daily-degrees">32&deg;</div>
            </div>
          </div>
        </div>
        <div className="daily-weather-card flex transition shadow-xl 5 rounded-xl max-w-2xl bg-sky-300">
          <div className=" flex flex-1 flex-col justify-between">
            <img className="weather-icon" src="src/images/cloud.svg" />
            <div className="day-card-day">
              Saturday
              <div className="daily-degrees">32&deg;</div>
            </div>
          </div>
        </div>
        <div className="daily-weather-card flex transition shadow-xl 5 rounded-xl max-w-2xl bg-sky-300">
          <div className=" flex flex-1 flex-col justify-between">
            <img className="weather-icon" src="src/images/cloud.svg" />
            <div className="day-card-day">
              Sunday
              <div className="daily-degrees">32&deg;</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
