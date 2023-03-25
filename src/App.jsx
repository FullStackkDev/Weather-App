import { useState, useEffect } from "react";
import Header from "./Components/Header";
import InputCity from "./Components/InputCity";
import ShowWeather from "./Components/ShowWeather";
import "./App.css"

export default function App() {
    const [inputCity, setInputCity] = useState("Lahore")
    const [cityName, setCityName] = useState("Lahore")
    const [weatherData, setWeatherData] = useState(false)
    const [error, setError] = useState(false);

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=205381b31f530f41b21b970c2c0cedad`;


    const inputHandler = (e) => {
        setInputCity(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault()
        setCityName(inputCity);
    };

    async function fetchData(URL) {
        if (cityName && cityName !== InputCity) {
            try {
                const response = await fetch(URL);
                const data = await response.json()
                console.log("data.cod ", data.cod)
                if (data.cod === "404") {
                    setError(true);
                } else {
                    setWeatherData(data);
                    setError(false)
                    setInputCity('')
                }
            } catch (error) {
                console.log(error.message)
            }
        }

    }

    useEffect(() => {
        fetchData(URL);
    }, [URL])


    return (
        <>
            <Header />
            <InputCity
                onInputHandler={inputHandler}
                onSubmitHandler={submitHandler}
                inputCity={inputCity}
            />
            {error ? (
                <h3 className="error">No data found :( </h3>
            ) : (
                <ShowWeather data={weatherData} />
            )}
        </>
    )
}