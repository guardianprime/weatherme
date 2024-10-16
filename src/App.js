import Search from "./components/Search";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState} from "react";

function App() {
  const [weatherDetails, setWeatherDetails] = useState("");

  return (
    <div className="app-container">
      <Header />
      <Hero weatherDetials={weatherDetails}>
        <Search weatherDetails={weatherDetails} setWeatherDetails={setWeatherDetails}/>
      </Hero>
      <Footer />
    </div>
  );
}

export default App;