import "./forecast.css";
import { IconContext } from "react-icons";
import { iconMap } from "../icon-map"
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { AccordionItemHeading } from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const Forecast = ({ data }) => {
    const dayInAWeek = null;
    // Date.parse(data.list[0].dt).getDay();
    
    console.log('debug');
    console.log(data.list);
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));  
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 5).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    {item.weather[0] &&
                                        <IconContext.Provider value={{ color: "orange", className: "forecast-weather-icon", title: "forecastWeatherIcon", size: "30px" }}>
                                            {iconMap[item.weather[0].id]}
                                        </IconContext.Provider>
                                    }
                                    <label className="datetime">{item.dt_txt}</label>
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>

                ))}

            </Accordion>
        </>
    );
}

export default Forecast;