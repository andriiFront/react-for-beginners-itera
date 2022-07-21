import React, { useContext } from "react";
import { StopwatchContext } from '../../context/Stopwatch/StopwatchContext'

export const ClockFace = () => {
  const { time } = useContext(StopwatchContext);
  
  return (
    <div className="numbers">
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};
