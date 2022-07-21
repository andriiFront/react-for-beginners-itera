import { createContext } from 'react'
import { formatDiagnosticsWithColorAndContext } from 'typescript';

export const StopwatchContext = createContext({
  startWatch: () => {},
  stoptWatch: () => {},
  clock: () => {},
  resetTime: () => {},
  time: 0,
  running: false
});
