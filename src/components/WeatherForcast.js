import { useState, useEffect } from "react";
import ErrorBoundary from "../utility/ErrorBoundary";

const today = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    weekday: 'short'
});

function WeatherForecast({ weatherDetails, number }) {
    const [isLoading, setIsLoading] = useState(!weatherDetails);

    useEffect(() => {
        setIsLoading(!weatherDetails);
    }, [weatherDetails]);

    return (
        <ErrorBoundary>
            <div className="weather-card">
                {isLoading ? (
                    <div className="card-loading">loading...</div>
                ) : (
                    <>
                        <h1>{number}</h1>
                        <h3 className="city left">
                            <span>{`${weatherdetails.forecast}, ${country}`}</span>
                            <span><i className="fa-solid fa-location-dot"></i></span>
                        </h3>
                        <h2 className="temp center">
                            <img className="thermometer" src="../images/thermometer.png" alt="" />
                            <span>{temp_c}℃</span>
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

export default WeatherForecast;