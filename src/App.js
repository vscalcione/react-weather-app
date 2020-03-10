import React, {useState} from 'react';

const openWeatherAPI = {
    key: "c830b9bdb66f00a6ee3f180e824240ef",
    base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if(evt.key === "Enter"){
            fetch(`${openWeatherAPI.base}weather?q=${query}&units=metric&lang=it&APPID=${openWeatherAPI.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    };

    const dateBuilder = (element) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dicember"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[element.getDay()];
        let month = months[element.getMonth()];
        let date = element.getDate();
        let year = element.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    };

    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app-cold') : 'app-cold'}>
            <main>
                <div className={"search-box"}>
                    <input type="text" className={"search-bar"} placeholder={"Search Location ... "} onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className={"location-box"}>
                            <div className={"location"}>{weather.name}, {weather.sys.country}</div>
                            <div className={"date"}>{dateBuilder(new Date())}</div>
                        </div>
                        <div className={"weather-box"}>
                            <div className={"temp"}>{weather.main.temp} °C</div>
                            <div className={"weather"}>{weather.weather[0].main}</div>
                        </div>
                    </div>
                ): ('')};
            </main>
        </div>
    );
}

export default App;
