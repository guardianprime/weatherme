function SmallWeather({ weatherDetails, time, timeString }) {
    return (
        <div className="times center">
            <div className="times-details">
                <h6>{timeString}</h6>
                <img src={weatherDetails?.forecast?.forecastday?.[0]?.hour[time]?.condition.icon} alt="" />
                <span>{weatherDetails?.forecast?.forecastday?.[0]?.hour[time]?.["temp_c"] + "℃"}</span>
            </div>
            <div className="times-design"></div>
        </div>
    )
}

export default SmallWeather;