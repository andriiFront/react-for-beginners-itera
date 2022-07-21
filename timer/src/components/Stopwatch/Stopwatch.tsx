import React, { useEffect, useContext } from "react";
import { StopwatchContext } from '../../context/Stopwatch/StopwatchContext'
import { ClockFace } from '../ClockFace/ClockFace'

export const Stopwatch = () => {
  const { startWatch, stoptWatch, clock, resetTime, running } = useContext(StopwatchContext);
  
  useEffect(clock, [running]);
  
  return (
    <div className="stopwatch">
      <h1>
        {running
          ? 'Running...'
          : 'Clock'
        }
      </h1>
      <ClockFace />
      <div className="buttons">
        <button onClick={startWatch}>Start</button>
        <button onClick={stoptWatch}>Stop</button>
        <button onClick={resetTime}>Reset</button>
      </div>
    </div>
  );
};
