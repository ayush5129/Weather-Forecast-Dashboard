import React from 'react'
import './WeatherDesc.css'
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from 'react-icons/bi';
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md"
const WeatherDesc = ({ weather, units }) => {
    const tempUnit = units === 'metric' ? '°C' : '°F'
    const windUnit = units === 'metric' ? 'm/s' : 'm/h'
    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: 'Min-Temp',
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: 'Max-Temp',
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            icon: <MdOutlineWaterDrop />,
            title: 'Humidity',
            data: weather.humidity,
            unit: '%',
        },
        {
            id: 4,
            icon: <FaWind />,
            title: 'Wind speed',
            data: weather.speed.toFixed(),
            unit: windUnit,
        },
        {
            id: 5,
            icon: <MdCompress />,
            title: 'Pressure',
            data: weather.pressure,
            unit: "hpa",
        },
        {
            id: 6,
            icon: <BiHappy />,
            title: 'Feels like',
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
    ]
    return (
        <>
            <h1 className='info'>Weather  Description</h1>
            <div className="component component_desc">
                {cards.map(({ id, icon, title, data, unit }) => (
                    <div key={id} className="card">
                        <div className="weather_icon">
                            {icon}
                            <small>{title}</small>
                        </div>
                        <h2>{`${data} ${unit}`}</h2>
                    </div>
                ))}
            </div>
        </>
    );
};

export default WeatherDesc
