import WeatherCard from "./WeatherCardView";
import WeatherForecast from "./WeatherForcast";

function WeatherCardCarousel({ weatherDetails }) {
    return (
        <div className="weather-card--container">
            <WeatherCard weatherDetails={weatherDetails} number="today" />
            <WeatherForecast weatherDetails={weatherDetails} number="tomorrow" />
        </div>
    )
}

export default WeatherCardCarousel;