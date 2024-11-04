import WeatherCard from "./WeatherCardView";
import WeatherForecast from "./WeatherForcast";

function WeatherCardCarousel({ weatherDetails }) {
    return (
        <div className="weather-card--container">
            <WeatherCard weatherDetails={weatherDetails} number="Today" />
            <WeatherForecast weatherDetails={weatherDetails} number="Tomorrow" />
        </div>
    )
}

export default WeatherCardCarousel;