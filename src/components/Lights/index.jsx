import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Light from './../Light';


const Lights = ({lights}) => {
  return (
    <main className="lights">
      {lights.map(light => <Light key={light.name} name={light.name} state={light.state} />)}
    </main>
  )
}

export default Lights;