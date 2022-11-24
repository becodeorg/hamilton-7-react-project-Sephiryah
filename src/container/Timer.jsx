import React, { useState } from 'react'

import Time from '../components/Time';
import ControlPanel from '../components/ControlPanel';

const Timer = () => {
  const [minute, setMinute] = useState([0,0]);
  const [secondeUnit, setSecondeUnit] = useState(0);
  const [secondeTen, setSecondeTen] = useState(0);

  function addMinutes() {
    let minuteUnit = minute[1] + 1;
    let minuteTen = minute[0];
    setMinute([minuteTen,minuteUnit]);
    console.log(minute);

    if(minute[1] >= 9) {
        minuteUnit = 0;
        minuteTen += 1;
        setMinute([minuteTen, minuteUnit]);
    }
  }
  return (
    <div className="flex flex-row justify-center items-center h-screen">
        <Time minute={minute} secondeUnit={secondeUnit} secondeTen={secondeTen}/>
        <ControlPanel addMinutes={addMinutes}/>
    </div>
  )
}

export default Timer