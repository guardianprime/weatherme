function Weather({ weatherDetails }) {
    return (<div className="weather-container">
        <div classNames="weather-card">
            <h5>location</h5>
            <h3><img src="../imgaes/thermometer.png" alt="" />- {weatherDetails.current.temp_c} - <img src={weatherDetails.current.condition.icon} alt="" /></h3>
            <h6>{weatherDetails.current.condition.text}</h6>
            <span>date</span>
            <div classNames="small-infos">
                <div>
                    <span>Humidity</span>
                    <span>29</span>
                </div>
                <div>
                    <span>Visibility</span>
                    <span>29</span>
                </div>
                <div>
                    <span>Air Pressure</span>
                    <span>29</span>
                </div>
                <div>
                    <span>Wind</span>
                    <span>29</span>
                </div>
            </div>
        </div>
        <div classNames="different-times">
            <div classNames="times">
                <h6>23:00</h6>
                <span>icon</span>
                <span>temperature</span>
            </div>
            <div classNames="times">
                <h6>23:00</h6>
                <span>icon</span>
                <span>temperature</span>
            </div>
            <div classNames="times">
                <h6>23:00</h6>
                <span>icon</span>
                <span>temperature</span>
            </div>
            <div classNames="times">
                <h6>23:00</h6>
                <span>icon</span>
                <span>temperature</span>
            </div>
            <div classNames="times">
                <h6>23:00</h6>
                <span>icon</span>
                <span>temperature</span>
            </div>
            <div classNames="times">
                <h6>23:00</h6>
                <span>icon</span>
                <span>temperature</span>
            </div>
            <div classNames="times">
                <h6>23:00</h6>
                <span>icon</span>
                <span>temperature</span>
            </div>
        </div>
    </div >)
}

export default Weather;