import { useState, useEffect } from "react";
import searchImage from "../images/icon-search.png"

const secondApikey = "3bf742496d36469eb3b135440241710";
const defaultCity = "lagos";
function Search({ setWeatherDetails, query, setQuery }) {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleQuery(e) {
        setQuery(e.target.value);
    };

    let temporaryQuery;
    if (!query) {
        temporaryQuery = defaultCity;
    } else {
        temporaryQuery = query;
    }

    useEffect(() => {
        const controller = new AbortController();
        query.toLowerCase().trim();
        async function getGeoLocation() {
            try {
                setIsLoading(true);
                const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${secondApikey}&q=${temporaryQuery}&days=2&aqi=no&alerts=no`, { signal: controller.signal });

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
    }, [temporaryQuery, query, setWeatherDetails]);

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
                <img src={searchImage} alt="magnifying glass" />
                {/*  <i className="fa-solid fa-magnifying-glass"></i> */}
            </div>
            {error && <div className="error-container">{error}</div>}
            {isLoading && <div className="loading-container">loading....</div>}
        </>
    );
}

export default Search;