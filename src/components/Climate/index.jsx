import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import temp from './img/temp.svg';


const Climate = ({temperature, humidity}) => {

  const [teplota, setTeplota] = useState(temperature);
  
  const zvysit = () => {
    setTeplota(teplota + 1);
  }

  const snizit = () => {
    setTeplota(teplota - 1);
  }

  return (
    <div className="climate">
				<div className="climate__icon">
					<img src={temp} />
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{teplota}&deg;C</div>
					<div className="climate__humidity">{humidity} &nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button" onClick={zvysit}>+</button>
					<button className="button" onClick={snizit}>-</button>
				</div>
		</div>
  )
}

export default Climate;


