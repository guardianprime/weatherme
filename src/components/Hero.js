import Search from "./Search";
import WeatherSmallContainers from "./WeatherSmallContainers";
import WeatherCardCarousel from "./WeatherCardCarousel";
import { useState } from "react";


function Hero() {
    const [weatherDetails, setWeatherDetails] = useState("");

    return (
        <section className="hero">
            <Search setWeatherDetails={setWeatherDetails} />
            <WeatherCardCarousel />
            <WeatherSmallContainers weatherDetails={weatherDetails} />
        </section>
    );
};

export default Hero;