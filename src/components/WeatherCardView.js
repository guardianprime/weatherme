import { useState, useEffect } from "react";
import thermometerIcon from "../images/icon-temperature.png"
import ErrorBoundary from "../utility/ErrorBoundary";

const today = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    weekday: 'short'
});

function WeatherCard({ weatherDetails, number }) {
    const [isLoading, setIsLoading] = useState(!weatherDetails);

    useEffect(() => {
        setIsLoading(!weatherDetails);
    }, [weatherDetails]);
    const {
        location: { name, country } = {},
        current: {
            temp_c,
            condition: { icon, text } = {},
            humidity,
            vis_km,
            pressure_mb,
            wind_mph
        } = {}
    } = weatherDetails || {};

    return (
        <ErrorBoundary>
            <div className="weather-card">
                {isLoading ? (
                    <div className="card-loading">loading...</div>
                ) : (
                    <>
                        <h1>{number}</h1>
                        <h3 className="city left">
                            <span className="name">{`${name}, ${country}`}</span>
                            <span><i className="fa-solid fa-location-dot"></i></span>
                        </h3>
                        <h2 className="temp center">
                            <img className="thermometer" src={thermometerIcon} alt="thermometer icon" />
                            <span className="temp-number">{temp_c}℃</span>
                            <img className="currentcloud" src={icon} alt="" />
                        </h2>
                        <h3 className="center summary">{text}</h3>
                        <span className="left today">{today}</span>
                        <div className="small-infos">
                            <div>
                                <span>Humidity</span>
                                <span>{humidity}%</span>
                            </div>
                            <div>
                                <span>Visibility</span>
                                <span>{vis_km} km</span>
                            </div>
                            <div>
                                <span>Air Pressure</span>
                                <span>{pressure_mb} hPa</span>
                            </div>
                            <div>
                                <span>Wind</span>
                                <span>{wind_mph} mph</span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </ErrorBoundary>
    );
}

export default WeatherCard;