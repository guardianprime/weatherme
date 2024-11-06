import SmallWeather from "./SmallWeather";

function WeatherSmallContainers({ weatherDetails }) {

    return (
        <div className="weatherSmallContainers" >
            <SmallWeather weatherDetails={weatherDetails} timeString="01:00" time="1" />
            <SmallWeather weatherDetails={weatherDetails} timeString="06:00" time="6" />
            <SmallWeather weatherDetails={weatherDetails} timeString="10:00" time="10" />
            <SmallWeather weatherDetails={weatherDetails} timeString="15:00" time="15" />
            <SmallWeather weatherDetails={weatherDetails} timeString="18:00" time="18" />
            <SmallWeather weatherDetails={weatherDetails} timeString="21:00" time="21" />
            <SmallWeather weatherDetails={weatherDetails} timeString="22:00" time="22" />
            <SmallWeather weatherDetails={weatherDetails} timeString="23:00" time="23" />
        </div >
    )
}

export default WeatherSmallContainers;