import { START_WATCH, STOP_WATCH, SET_TIME, RESET_TIME } from '../type'

type stateType = {
  running: boolean,
  time: number
}

type actionType = {
  type: string
}

export const StopwatchReducer = (state: stateType, action: actionType) => {
  switch(action.type) {
    case START_WATCH:
      return { ...state, running: true }

    case STOP_WATCH:
      return { ...state, running: false }
    
    case SET_TIME:
      return { ...state, time: state.time + 10 }
    
    case RESET_TIME:
      return { ...state, time: 0 }

    default:
      return state
  }
}
