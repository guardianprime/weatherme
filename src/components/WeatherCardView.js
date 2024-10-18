const today = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    weekday: 'short'
});

function WeatherCard({ weatherDetails, query }) {
    return (
        <div className="weather-card">
            <h3 className="city left">{query}<span><i className="fa-solid fa-location-dot"></i></span></h3>
            <h2 className="temp center" ><img className="thermometer" src="../images/thermometer.png" alt="" /><span>{weatherDetails?.current?.["temp_c"]}</span><img className="currentcloud" src={weatherDetails.current?.condition?.icon} alt="" /></h2>
            <h3 className="center summary">{weatherDetails?.current?.condition?.text}</h3>
            <span className="left today">{today}</span>
            <div className="small-infos">
                <div>
                    <span>Humidity</span>
                    <span>{weatherDetails?.current?.humidity + "%"}</span>
                </div>
                <div>
                    <span>Visibility</span>
                    <span>{weatherDetails.current?.["vis_km"] + "km"}</span>
                </div>
                <div>
                    <span>Air Pressure</span>
                    <span>{weatherDetails.current?.["pressure_mb"] + "hpa"}</span>
                </div>
                <div>
                    <span>Wind</span>
                    <span>{weatherDetails.current?.["wind_mph"] + "mph"}</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;