function WeatherCard() {
    return (
        <div className="weather-card">
            <h3 className="city left">lagos<span><i className="fa-solid fa-location-dot"></i></span></h3>
            <h2 className="temp center" ><img className="thermometer" src="../images/thermometer.png" alt="" />- 25c - <img className="currentcloud" src="" alt="" /></h2>
            <h3 className="center summary">it is rather cold today.</h3>
            <span className="left today">Oct 18 Fri</span>
            <div className="small-infos">
                <div>
                    <span>Humidity</span>
                    <span>99%</span>
                </div>
                <div>
                    <span>Visibility</span>
                    <span>8km</span>
                </div>
                <div>
                    <span>Air Pressure</span>
                    <span>1005hpa</span>
                </div>
                <div>
                    <span>Wind</span>
                    <span>2mph</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;