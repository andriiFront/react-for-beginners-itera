import React, { useReducer, PropsWithChildren, FC } from 'react'
import { StopwatchContext } from './StopwatchContext'
import { StopwatchReducer } from './StopwatchReducer'
import { START_WATCH, STOP_WATCH, SET_TIME, RESET_TIME } from '../type';

type Props = PropsWithChildren<{}>

export const StopwatchState: FC<Props> = ({ children }) => {
  const initialState = {
    running: false,
    time: 0
  }

  const [state, dispatch] = useReducer(StopwatchReducer, initialState)

  const startWatch = () => dispatch({ type: START_WATCH })
  const stoptWatch = () => dispatch({ type: STOP_WATCH })
  const resetTime = () => dispatch({ type: RESET_TIME })

  const clock = () => {
    let interval: any;

    if (state.running) {
      interval = setInterval(
        () => dispatch({ type: SET_TIME }),
      10);
    } else if (!state.running) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
    
  }

  return (
    <StopwatchContext.Provider value={{
      startWatch,
      stoptWatch,
      clock,
      resetTime,
      running: state.running,
      time: state.time
    }}>
      {children}
    </StopwatchContext.Provider>
  )
}
