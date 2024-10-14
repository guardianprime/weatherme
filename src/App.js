import Search from "./components/Search";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero>
        <Search />
      </Hero>
      <Footer />
    </div>
  );
}

export default App;