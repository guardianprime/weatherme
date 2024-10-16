function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <div className="logo-inner-wrapper">
                        <img src="../" alt="logo" />
                        <span>WeatherMe</span>
                    </div>
                </div>
                <ul>
                    <li>Today</li>
                    <li>Tomorrow</li>
                    <li>Monthly</li>
                </ul>
            </nav>
        </header >);
}

export default Header;