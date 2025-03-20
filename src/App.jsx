import react,{useState} from "react"

function App() {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState("");

    const getWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=98c209d816c27ee9721aca804e5fc82e&units=metric`);
      const data = await response.json();
      setWeather({
        name:data.name,
        temp:data.main.temp,
        des:data.weather[0].description,
        feelslike:data.main.feels_like,
        humidity:data.main.humidity,
        wind:data.wind.speed,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      }); 
  };

  getWeather();

return (
  <>
     <div className="app">
     <div className="input">
       <input type="text"
       placeholder="Enter Location"
       value={location}
       onChange={(e) =>setLocation(e.target.value)}/>
       <button onClick={getWeather}>Search</button>
     </div>

       <div className="container">
          <div className="top">
            <div className="location">
              <p>{weather.name}</p>
            </div>
            <div className="temperature">
             <h1> {weather.temp}°C</h1>
            </div>
            <div className="description">
              <p> {weather.des}</p>
            </div>
          </div>

          <div className="middle">
            <div className="icon">
             <img src={weather.icon} alt="Weather Icon" />
            </div>
          </div>

          <div className="bottom">
           <div className="feels">
             <p className="bold">{weather.feelslike}°C</p>
             <p>Feels Like</p>
           </div>
           <div className="humidity">
             <p className="bold">{weather.humidity}%</p>
             <p>humidity</p>
           </div>
           <div className="wind">
             <p className="bold">{weather.wind} m/s</p>
              <p>Wind Speed</p>
           </div>
          </div>

       </div>
     </div>
     </>
  )
}

export default App