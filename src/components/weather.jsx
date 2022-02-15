import React from 'react';
import moment from 'moment';

const refresh = () => {
    window.location.reload();
}

const Weather = ({ weatherData }) => (
    <div>
        <div>
            <div className="header">{weatherData.name}</div>
            <p>Temperature: {weatherData.main.temp} &deg;C</p>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Description: {weatherData.weather[0].main}</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p>Day: {moment().format('dddd')}</p>
            <p>Date: {moment().format('LL')}</p>
            <button className="button" onClick={refresh}>
                refresh
            </button>
        </div>
    </div>
)

export default Weather;