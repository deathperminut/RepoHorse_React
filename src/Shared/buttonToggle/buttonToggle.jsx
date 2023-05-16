

import React from "react";
import "./buttonToggle.css";
  
const ToggleSwitch = ({saveFunction,RememberPassword}) => {



  return (
    <div className="container">
      <span className="labelSwitch">{'Recordarme'}{" "}</span>
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name={'Recordarme'} id={'Recordarme'} onChange={saveFunction} checked={RememberPassword} />
        <label className="label" htmlFor={'Recordarme'}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;