import React, { useState, useEffect, useRef } from 'react'
import Time from '../components/Time';
import ControlPanel from '../components/ControlPanel';

const Timer = () => {
  const [minute, setMinute] = useState([0, 0]);
  const [seconde, setSeconde] = useState([0, 0]);
  const [playActivated, setPlayActivated] = useState(false);

  let secondeUnit;
  let secondeTen;
  let minuteTen;
  let minuteUnit;
  let playStop = useRef("Play");

  function addMinutes() {
    if(playActivated == false){
      minuteUnit = minute[1] + 1;
      minuteTen = minute[0];

      console.log(minute);

      if (minuteUnit >= 9) {
        minuteUnit = 0;
        minuteTen += 1;
      }
      setMinute([minuteTen, minuteUnit]);
    }
  }

  function removeMinutes() {
    if(playActivated == false) {
      minuteUnit = minute[1] - 1;
      minuteTen = minute[0];

      console.log(minute);

      if (minuteUnit <= 0) {
        minuteUnit = 9;
        minuteTen -= 1;

        if (minute[0] <= 0) {
          minuteUnit = 0;
          minuteTen = 0;
        }
      }
      setMinute([minuteTen, minuteUnit]);
    }
  }

  function reset() {
    minuteUnit = 0;
    minuteTen = 0;
    secondeUnit = 0;
    secondeTen = 0;
    setMinute([minuteTen, minuteUnit]);
    setSeconde([secondeTen, secondeUnit]);
  }

  function play() {
    
    setPlayActivated(!playActivated);

    console.log(playActivated);
    if (playActivated == false) {
      playStop.current = "Stop"
    } else {
      playStop.current = "Play"
    }
    console.log(playStop);
  }

  useEffect(() => {
      let interval = setInterval(() => {
        secondeUnit = seconde[1];
        secondeTen = seconde[0];
        minuteTen = minute[0];
        minuteUnit = minute[1];

        if (playActivated) {
          console.log(playActivated);
          
          console.log(seconde)

          if(secondeUnit > 0 || secondeTen != 0 || minuteUnit != 0 || minuteTen !== 0) {
            secondeUnit -= 1;
          }

          if((minuteTen == 0) && (minuteUnit == 0) &&  (secondeTen == 0) && secondeUnit == 0){
            setPlayActivated((_playActivated) => false);
            playStop.current = "Play";
          }

          if (secondeUnit <  0) {
            secondeUnit = 9;
            secondeTen -= 1;
          }

          if (secondeTen < 0) {
            secondeTen = 5;
            minuteUnit -= 1;
          }

          if (minuteUnit < 0) {
            minuteUnit = 9;
            minuteTen -= 1;
          }

          setSeconde((_seconde) => [secondeTen,secondeUnit]);
          setMinute((_minute) => [minuteTen,minuteUnit]);
        }
      }, 1000);
    //setSeconde((_seconde) => [secondeUnit,secondeTen]);
    //setMinute((_minute) => [minuteUnit,minuteTen]);
    return () => clearInterval(interval);
  },[playActivated,seconde]);

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <Time minute={minute} seconde={seconde} />
      <ControlPanel playStop={playStop.current} addMinutes={addMinutes} play={play} reset={reset} removeMinutes={removeMinutes} />
    </div>
  )
}


export default Timer