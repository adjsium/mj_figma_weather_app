import "./forecast.css";
import { IconContext } from "react-icons";
import { WiHumidity} from "react-icons/wi";
import { CgArrowUp, CgArrowDown } from "react-icons/cg";
import { iconMap } from "../icon-map"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const Forecast = ({ data }) => {
    const dayInAWeek = null;
    // Date.parse(data.list[0].dt).getDay();


    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    return (
        <>
            
            <Row md={true}  className="forecast-row">
                {Array.from(data.daily.slice(0, 5)).map((item, idx) => (
                    <Col key={idx}>
                        <Card>
                            {item.weather[0] &&
                                <IconContext.Provider value={{ color: "orange", className: "forecast-weather-icon", title: "forecastWeatherIcon", size: "38px" }}>
                                    {iconMap[item.weather[0].id]}
                                    <span className="daily-temp">{Math.round(item.temp.day)}°C</span>
                                </IconContext.Provider>
                            }
                            
                            <Card.Body>
                                <Card.Title>{forecastDays[idx]}  </Card.Title>
                                <Card.Text>
                                <IconContext.Provider value={{color: "#F0EEF1",  className: "forecast-weather-icon-small", title: "forecastWeatherIconSm", size: "16px" }}>
                                    {item.weather[0].description}<br/>
                                    <span className="daily-detail-box"><CgArrowDown/>{Math.round(item.temp.min)}°C <br/></span>
                                    <span className="daily-detail-box"><CgArrowUp/>{Math.round(item.temp.max)}°C<br/></span>
                                    <span className="daily-detail-box"><WiHumidity/>{item.humidity}%</span>
                                    </IconContext.Provider>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Forecast;