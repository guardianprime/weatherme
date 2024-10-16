function Hero({ children , weatherDetails}) {
    return (
        <section className="hero">
            {children}
            <div className="weather-results"></div>
        </section>
    );
};

export default Hero;