import { useState, useEffect } from "react";
import thermometerIcon from "../images/icon-temperature.png";
import ErrorBoundary from "../utility/ErrorBoundary";

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
const formattedTomorrow = tomorrow.toLocaleDateString('en-US', {
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
                    <div className="card-loading">Loading...</div>
                ) : (
                    <>
                        <h1>{number}</h1>
                        <h3 className="city left">
                            <span className="name">
                                {`${weatherDetails?.location?.name}, ${weatherDetails?.location?.country}`}
                            </span>
                            <span>
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                        </h3>
                        <h2 className="temp center">
                            <img
                                className="thermometer"
                                src={thermometerIcon}
                                alt="Thermometer icon"
                            />
                            <span className="temp-number">
                                {weatherDetails?.forecast?.forecastday?.[1]?.day["maxtemp_c"]}℃
                            </span>
                            <img
                                className="currentcloud"
                                src={weatherDetails?.forecast?.forecastday?.[1]?.day?.condition?.icon}
                                alt={weatherDetails?.forecast?.forecastday?.[1]?.day?.condition?.text}
                            />
                        </h2>
                        <h3 className="center summary">
                            {weatherDetails?.forecast?.forecastday?.[1]?.day?.condition?.text}
                        </h3>
                        <span className="left today">{formattedTomorrow}</span>
                        <div className="small-infos">
                            <div>
                                <span>Humidity</span>
                                <span>
                                    {weatherDetails?.forecast?.forecastday?.[1]?.day?.avghumidity}%
                                </span>
                            </div>
                            <div>
                                <span>Visibility</span>
                                <span>
                                    {weatherDetails?.forecast?.forecastday?.[1]?.day?.avgvis_km} km
                                </span>
                            </div>
                            <div>
                                <span>Min Temp</span>
                                <span>
                                    {weatherDetails?.forecast?.forecastday?.[1]?.day["mintemp_c"]}℃
                                </span>
                            </div>
                            <div>
                                <span>Wind</span>
                                <span>
                                    {weatherDetails?.forecast?.forecastday?.[1]?.day?.maxwind_mph} mph
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </ErrorBoundary>
    );
}

export default WeatherForecast;
