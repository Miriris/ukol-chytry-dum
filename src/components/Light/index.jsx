import React, {useState} from 'react';
import { render } from 'react-dom';
import './style.css';
import lightOn from './img/light-on.svg';
import lightOff from './img/light-off.svg';


const Light = ({name, state}) => {

  const [stateLight, setStateLight] = useState(state);

  const prepnout = () => {
    setStateLight(!stateLight);
  }

  return (
     <div className="light" onClick={prepnout}>
				<div className="light__icon">
					<img src={stateLight ? lightOn : lightOff} />
				</div>
				<div className="light__name">
					{name}
				</div>
		</div>
  )
}

export default Light;