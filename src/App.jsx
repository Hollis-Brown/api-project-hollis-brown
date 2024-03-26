import WeatherLookUp from "./components/1-WeatherLookUp";
// import FetchDoggoPics from "./components/2-FetchDoggoPics";
import CurrentWeatherCard from "./components/3-CurrentWeatherCard";
import DailyWeatherCard from "./components/4-DailyWeatherCard";
import HourlyWeatherCard from "./components/5-HourlyWeatherCard";
// import WeatherChart from "./components/6-WeatherChart";
import CustomSkeleton from "./components/6a-CustomSkeleton";
import "./App.css";

function App() {
  return (
    <>
      <div className="mt-8">
        <WeatherLookUp />
        <CurrentWeatherCard />
        <DailyWeatherCard />
        <HourlyWeatherCard />
        <CustomSkeleton />
        {/* <WeatherChart /> */}
      </div>
    </>
  );
}

export default App;
