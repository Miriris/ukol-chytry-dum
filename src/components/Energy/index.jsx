import React from 'react';
import { render } from 'react-dom';
import './style.css';
import electricityImage from './img/electricity.svg';
import waterImage from  './img/water.svg';


const Energy = ({electricity, water}) => {
  return (
    <div className="energy">
				<div className="energy__source">
					<div className="energy__icon">
						<img src={electricityImage} />
					</div>
					<div className="energy__consumption">
						<div className="energy__description">Elektřina</div>
						<div className="energy__value">{electricity}</div>
					</div>
				</div>
				<div className="energy__source">
					<div className="energy__icon">
						<img src={waterImage} />
					</div>
					<div className="energy__consumption">
						<div className="energy__description">Voda</div>
						<div className="energy__value">{water}<sup>3</sup></div>
					</div>
				</div>
    </div>
  )
}

export default Energy;