import React from 'react';

const openWeatherAPI = {
  key: "c830b9bdb66f00a6ee3f180e824240ef",
  base: "https://api.openweather.org/data/2.5"
};

function App() {
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
    <div className={"app-cold"}>
      <main>
        <div className={"search-box"}>
            <input type="text" className={"search-bar"} placeholder={"Search City..."} />
        </div>
          <div className={"location-box"}>
              <div className={"location"}>New York City, US</div>
              <div className={"date"}>{dateBuilder(new Date())}</div>
          </div>
          <div className={"weather-box"}>
              <div className={"temp"}>
                  15 °C
              </div>
              <div className={"weather"}>Sunny</div>
          </div>
      </main>
    </div>
  );
}

export default App;
