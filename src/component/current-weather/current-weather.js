import "./current-weather.css";
import { WiDayFog } from "react-icons/wi";
import { IconContext } from "react-icons";
const CurrentWeather = () =>{
    return(
        <div className="weather">
            <div className="top">
                <p className="city">location</p>
                <p className="weather-description">lorem.</p>
            </div>
            <IconContext.Provider value={{ color: "orange", className: "current-weather-icon", title: "currentWeatherIcon"}}>
                <div>
                <WiDayFog />
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default CurrentWeather;