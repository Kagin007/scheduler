import {useEffect, useState} from 'react';
import axios from 'axios';
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../helpers/selectors";

export function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  //easy reset of data
  // axios.get('http://localhost:8001/api/debug/reset')

  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`http://localhost:8001/api/appointments/${id}`, {interview} )
      .then(() => {
        setState({...state, appointments}) 
        // interview: null}
      })
      // .catch(err => console.log(err))
    }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`http://localhost:8001/api/appointments/${id}`, {interview} )
      .then(() => {
        setState({...state,
          appointments, interview: null})
      })
    //   .catch(err => console.log(err))
    }




  const setDay = day => setState({ ...state, day });

  useEffect( () => {
    Promise.all([
    axios.get('http://localhost:8001/api/days'),
    axios.get('http://localhost:8001/api/appointments'),
    axios.get('http://localhost:8001/api/interviewers')
  ])
    .then(response => {
      setState(prev => ({
        ...prev,
        days: [...response[0].data],
        appointments: {...response[1].data},
        interviewers: {...response[2].data}
      }))
    })
  }, []) 
  
  return {
    state, setDay, bookInterview, cancelInterview
  }
}
