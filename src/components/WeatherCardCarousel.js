import WeatherCard from "./WeatherCardView";
function WeatherCardCarousel({ weatherDetails, query }) {
    return (
        <div className="weather-card--container">
            <WeatherCard weatherDetails={weatherDetails} number="today" forecastbool={true} query={query} />
            <WeatherCard weatherDetails={weatherDetails} forecastbool={false} number="tomorrow" query={query} />
        </div>
    )
}

export default WeatherCardCarousel;