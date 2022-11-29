import React, { useState, useEffect, useRef } from 'react'
import Time from '../components/Time';
import ControlPanel from '../components/ControlPanel';
import Modal from './Modal';

const Timer = () => {
  const [minute, setMinute] = useState([0, 1]);
  const [seconde, setSeconde] = useState([0, 0]);
  const [playActivated, setPlayActivated] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let secondeUnit;
  let secondeTen;
  let minuteTen;
  let minuteUnit;
  let playStop = useRef("Play");

  
  function addMinutes() {
    if(playActivated == false){
      minuteUnit = minute[1] + 1;
      minuteTen = minute[0];

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
    setMinute([0, 1]);
    setSeconde([0, 0]);

    if (playActivated) {
      setPlayActivated(!playActivated);
    }
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
          
          if (secondeUnit == 0 && secondeTen == 0 && minuteUnit == 0 && minuteTen == 0) {
            setIsActive(!isActive);
          }
          setSeconde((_seconde) => [secondeTen,secondeUnit]);
          setMinute((_minute) => [minuteTen,minuteUnit]);
        }
      }, 1000);
    
    return () => clearInterval(interval);
  },[playActivated,seconde]);

  function closeModal() {
    setIsActive(!isActive);
  }

  function resetModal() {
    closeModal();
    reset();
  }

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <Time minute={minute} seconde={seconde} />
      <ControlPanel playStop={playStop.current} addMinutes={addMinutes} play={play} reset={reset} removeMinutes={removeMinutes} />
      <Modal isActive={isActive} closeModal={closeModal} resetModal={resetModal}/>
    </div>
  )
}


export default Timer