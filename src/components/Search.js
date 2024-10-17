import { useState, useEffect } from "react";

const secondApikey = "3bf742496d36469eb3b135440241710";

function Search({ setWeatherDetails }) {
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");

    function handleQuery(e) {
        setQuery(e.target.value.toLowerCase().trim());
    };

    useEffect(() => {
        if (!query) return;
        const controller = new AbortController();
        async function getGeoLocation() {
            try {
                const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${secondApikey}&q=${query}&aqi=no`, { signal: controller.signal });
                if (!res.ok) throw new Error("could not fetch the location");
                const data = await res.json();
                setWeatherDetails(data);
                console.log(data);
            } catch (err) {
                setError(err.message);
            }
        }

        getGeoLocation()

        return () => {
            controller.abort();
        }
    }, [query,setWeatherDetails]);
    return (
        <div className="search-container">
            <input
                type="text"
                onChange={handleQuery}
                className="search"
                value={query}
            />
            <div className="error-container">{error}</div>
        </div>
    );
}

export default Search;