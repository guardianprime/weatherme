import Search from "./Search";
import WeatherSmallContainers from "./WeatherSmallContainers";
import WeatherCardCarousel from "./WeatherCardCarousel";
import { useState } from "react";


function Hero() {
    const [weatherDetails, setWeatherDetails] = useState({});
    const [query, setQuery] = useState("");


    return (
        <section className="hero">
            <Search setWeatherDetails={setWeatherDetails} query={query} setQuery={setQuery} />
            <WeatherCardCarousel weatherDetails={weatherDetails} query={query} />
            <WeatherSmallContainers weatherDetails={weatherDetails} />
        </section>
    );
};

export default Hero;