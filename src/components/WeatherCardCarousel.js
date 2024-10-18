import WeatherCard from "./WeatherCardView";
function WeatherCardCarousel({ weatherDetails, query }) {
    return (
        <div className="weather-card--container">'
            <WeatherCard weatherDetails={weatherDetails} query={query} />
        </div>
    )
}

export default WeatherCardCarousel;