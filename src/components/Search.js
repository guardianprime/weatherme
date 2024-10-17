import { useState, useEffect } from "react";

const secondApikey = "3bf742496d36469eb3b135440241710";

function Search({ setWeatherDetails }) {
    const [query, setQuery] = useState("");
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
                const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${secondApikey}&q=${query}&aqi=no`, { signal: controller.signal });
                if (!res.ok) throw new Error("could not fetch the location");
                const data = await res.json();
                setWeatherDetails(data);
                console.log(data);
            } catch (err) {
                setError(err.message);
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
        <div className="search-container">
            <input
                type="text"
                onChange={handleQuery}
                className="search"
                value={query}
            />
            {error ? <div className="error-container">{error}</div> : ""}
            {isLoading && <div className="loading-container">loading....</div>}
        </div>
    );
}

export default Search;