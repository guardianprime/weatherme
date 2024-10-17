import Search from "./components/Search";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Weather from "./components/Weather"
import { useState } from "react";

function App() {
  const [weatherDetails, setWeatherDetails] = useState("");

  return (
    <div className="app-container">
      <Header />
      <Hero >
        <Search setWeatherDetails={setWeatherDetails} />
        <Weather weatherDetails={weatherDetails} />
      </Hero>
      <Footer />
    </div>
  );
}

export default App;