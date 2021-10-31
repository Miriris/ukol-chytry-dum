import React, {useState} from 'react';
import { render } from 'react-dom';
import './style.css';
import openImage from "./img/blinds-open.svg";
import closedImage from "./img/blinds-closed.svg";


const Blinds = ({state}) => {

  const [stateBlinds, setStateBlinds] = useState(state);
  
  const otevreno = () => {
    setStateBlinds(stateBlinds);
  }

  const zavreno = () => {
    setStateBlinds(!stateBlinds);
  }

  return (
    <div className="blinds">
				<div className="blinds__icon">
					<img src={stateBlinds ? openImage : closedImage} />
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className={ (stateBlinds) ? "button button--active" : "button"} onClick={otevreno}>Otevřeno</button>
					<button className={ (stateBlinds) ? "button" : "button button--active"} onClick={zavreno}>Zavřeno</button>
				</div>
		</div>
  )
  }

export default Blinds;
