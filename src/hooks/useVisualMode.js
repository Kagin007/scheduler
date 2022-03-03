import {useState} from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode ] = useState(initial);
  const [history, setHistory] = useState([initial])

    const transition = (newMode, replace=false) => {
      if (replace === true) {
        //get array of current history
        const prevHistory = [...history]
        //replace last index with newMode
        prevHistory.pop()
        setHistory(prevHistory)
      }
      setMode(newMode)
      //add new element to history array
      setHistory((prev) => [...prev, newMode])
      
    }

    const back = () => {
      if (history.length > 1) {
        //remove last element in history array
        const prevHistory = [...history]

        prevHistory.pop()
        setHistory(prevHistory)
        //set mode to last element in history array
        setMode(prevHistory[prevHistory.length-1])
      }      
    }

    return { mode, transition, back };       
  }

  // const {mode, transition, back} = useVisualMode(params)
