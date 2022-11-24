import React, { useState } from 'react'

import Time from '../components/Time';
import ControlPanel from '../components/ControlPanel';

const Timer = () => {
  const [minute, setMinute] = useState([0,0]);
  const [seconde, setSeconde] = useState([0,0]);

  let minuteUnit;
  let minuteTen;

  function addMinutes() {
    minuteUnit = minute[1] + 1;
    minuteTen = minute[0];
    setMinute([minuteTen,minuteUnit]);
    console.log(minute);

    if(minute[1] >= 9) {
        minuteUnit = 0;
        minuteTen += 1;
        setMinute([minuteTen, minuteUnit]);
    }
  }

  function removeMinutes() {
    minuteUnit = minute[1] - 1;
    minuteTen = minute[0];
    setMinute([minuteTen, minuteUnit]);
    console.log(minute);

    if(minute[1] <= 0) {
      minuteUnit = 9;
      minuteTen -= 1;
      setMinute([minuteTen, minuteUnit]);

      if(minute[0] <= 0) {
        minuteUnit = 0;
        minuteTen = 0;
        setMinute([minuteTen, minuteUnit]);
      }
    }
  }
  return (
    <div className="flex flex-row justify-center items-center h-screen">
        <Time minute={minute} seconde={seconde}/>
        <ControlPanel addMinutes={addMinutes} removeMinutes={removeMinutes}/>
    </div>
  )
}

export default Timer