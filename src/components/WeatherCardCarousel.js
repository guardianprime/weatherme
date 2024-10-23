import WeatherCard from "./WeatherCardView";
function WeatherCardCarousel({ weatherDetails, query }) {
    return (
        <div className="weather-card--container">'
            <WeatherCard weatherDetails={weatherDetails} number="yesterday" query={query} />
            <WeatherCard weatherDetails={weatherDetails} number="today" query={query} />
            <WeatherCard weatherDetails={weatherDetails} number="tomorrow" query={query} />
        </div>
    )
}

export default WeatherCardCarousel;