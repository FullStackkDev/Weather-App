import "../Styles/ShowWeather.css"
import { WeatherIcons, WeatherInfoIcons } from "./WeatherIcons"

export default function ShowWeather({ data }) {
    const city = data.name;
    const country = data.sys ? data.sys.country : null;
    const temperature = data.main ? data.main.temp : null;
    const pressure = data.main ? data.main.pressure : null;
    const visibility = data ? data.visibility : null;
    const humidity = data.main ? data.main.humidity : null;
    const clouds = data.clouds ? data.clouds.all : null;
    const status = data.weather ? data.weather[0].main : null
    const icon = data.weather ? data.weather[0].icon : null

    // Values in standard units
    const pressureInAtm = (pressure / 1000).toFixed(2);
    const tempInCelcius = (temperature - 273).toFixed(0);
    const visibilityInKM = (visibility / 1000).toFixed(2);


    return (
        <div className="showWeather">
            <div className="weatherMain">
                <span>
                    {tempInCelcius}° C <sub> | {status} </sub>
                </span>
                <img src={WeatherIcons[icon]} alt="" />
            </div>
            <div className="location">
                {city}, {country}
            </div>
            <div className="weatherInfo">
                Weather Info
            </div>
            <div className="row">
                <div className="weatherData">
                    <img src={WeatherInfoIcons["visibility"]} alt="" />
                    <p>
                        {visibilityInKM} Km
                        <br />
                        Visibility
                    </p>
                </div>

                <div className="weatherData">
                    <img src={WeatherInfoIcons["humidity"]} alt="" />
                    <p>
                        {humidity}%{" "}
                        <br />
                        Humidity
                    </p>
                </div>
                <div className="weatherData">
                    <img src={WeatherInfoIcons["clouds"]} alt="" />

                    <p>
                        {clouds} %{" "}
                        <br />
                        Clouds
                    </p>
                </div>
                <div className="weatherData">
                    <img src={WeatherInfoIcons["pressure"]} alt="" />
                    <p>
                        {pressureInAtm} atm
                        <br />
                        Pressure
                    </p>
                </div>
            </div>
        </div>

    )
};
