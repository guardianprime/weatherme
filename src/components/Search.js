import { useState, useEffect } from "react";

const APIKEY = "0c2d3466c9b8d0873b384fcf38f6842d";

function Search({ weatherDetails, setWeatherDetails }) {
    const [query, setQuery] = useState("");
    const [error, setError] = useState(null); // Set error to null initially
    const [geoLocation, setGeoLocation] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    function handleQuery(e) {
        setQuery(e.target.value);
    }

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);

        async function getGeolocation() {
            try {
                const res = await fetch(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${APIKEY}`,
                    { signal: controller.signal }
                );
                if (!res.ok) throw new Error("failed to fetch city long and lat");
                const longAndLat = await res.json();
                setGeoLocation(longAndLat);
                console.log(longAndLat)
            } catch (err) {
                setError(err.message); // Set error to the actual error message
            } finally {
                setIsLoading(false);
            }
        }

        getGeolocation();

        return () => controller.abort(); // Cleanup function to abort fetch on unmount
    }, [query, geoLocation]); // Dependency array includes query and geoLocation
    /* 
        useEffect(() => {
            async function getWeather({ lat, lon }) {
                const res = await fetch(
                    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${APIKEY}`
    
                );
                const city = await res.json();
                setWeatherDetails(city);
            }
    
            if (geoLocation.lat && geoLocation.lon) { // Check if location is available before fetching weather
                getWeather(geoLocation);
            }
        }, [geoLocation, setWeatherDetails]); // Dependency array includes geoLocation
     */
    return (
        <div className="search-container">
            <input
                type="text"
                onChange={handleQuery}
                className="search"
                value={query}
            />
            {error && <div className="error-response">{error}</div>}
            {isLoading && <div>Loading...</div>}
        </div>
    );
}

export default Search;