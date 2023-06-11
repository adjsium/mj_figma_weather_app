import "./current-weather.css";
import { IconContext } from "react-icons";
import {iconMap, nightIconMap} from "../icon-map"
const CurrentWeather = ({ data }) => {

    const DynamicIcon = iconMap[data.weather[0].id];
    const nightDynamicIcon = nightIconMap[data.weather[0].id];
    return (
        <div className="weather">
            <div className="top">

                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <div>
                    {data.sys.sunset>data.dt && data.dt>data.sys.sunrise ? (
                        <IconContext.Provider value={{ color: "orange", className: "current-weather-icon", title: "currentWeatherIcon", size: "80px" }}>
                            {DynamicIcon}
                         </IconContext.Provider>
                    ) : (
                        <IconContext.Provider value={{ color: "#011940", className: "current-weather-icon", title: "currentWeatherIcon", size: "80px" }}>
                        {nightDynamicIcon}
                     </IconContext.Provider>
                    )}
                </div>
            </div>
            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    {
                        data.rain &&
                        <div className="parameter-row">
                            <span className="parameter-label">Rainfall</span>
                            <span className="parameter-value">{data.rain['1h']}mm</span>
                        </div>
                    }

                </div>
            </div>


        </div>
    );
}

export default CurrentWeather;