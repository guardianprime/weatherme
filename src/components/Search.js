import { useState, useEffect } from "react";

const secondApikey = "3bf742496d36469eb3b135440241710";

function Search({ setWeatherDetails, query, setQuery }) {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    function handleQuery(e) {
        setQuery(e.target.value.toLowerCase().trim());
    };

    useEffect(() => {
        if (!query) return;
        const controller = new AbortController();
        async function getGeoLocation() {
            try {
                setIsLoading(true);
                const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${secondApikey}&q=${query}&days=2&aqi=no&alerts=no`, { signal: controller.signal });
                if (!res.ok) throw new Error("could not fetch the location. try cities like california and london.");
                const data = await res.json();
                if (!data) throw new Error("could not find the location");
                setWeatherDetails(data);
                console.log(data);
            } catch (err) {
                if (err.message === "signal is aborted without reason") {
                    setError("");
                } else {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        getGeoLocation()

        return () => {
            controller.abort();
        }
    }, [query, setWeatherDetails]);
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleQuery}
                    className="search"
                    value={query}
                    placeholder="Search location..."
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {error && <div className="error-container">{error}</div>}
            {isLoading && <div className="loading-container">loading....</div>}
        </>
    );
}

export default Search;