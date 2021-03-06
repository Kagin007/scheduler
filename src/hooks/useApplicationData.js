import {useEffect, useState} from 'react';
import axios from 'axios';

export function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  //easy reset of data
  // axios.get('http://localhost:8001/api/debug/reset')
  
  const spotsUpdate = (weekday, day, variable)  => {
    let spot = day.spots;
    console.log(spot)
    //for creating
    if( weekday === day.name && variable === "remove_spots") {
      return spot - 1
    }
    //for deleting
    else if ( weekday === day.name && variable === "add_spots") {
      return spot + 1
    }
    //for editing
    return spot
  };

  function bookInterview(id, interview) {

    console.log('id1:', id)
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, {interview} )
      .then(() => {

        const newDays = state.days.map((day) => {  
          console.log(day)
          return {...day, spots: spotsUpdate(state.day, day, "remove_spots" )} 
        })

        setState({
          ...state,
          days: newDays,
          appointments
        });
      });
    }

  function editInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, {interview} )
      .then(() => {

        const newDays = state.days.map((day) => {  
          console.log(day)
          return {...day, spots: spotsUpdate(state.day, day )} 
        })

        setState({
          ...state,
          days: newDays,
          appointments
        })
      });
    };

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`, {interview} )
      .then(() => {

        const newDays = state.days.map((day) => {  
          console.log(day)
          return {...day, spots: spotsUpdate(state.day, day, "add_spots" )} 
        })

        setState({
          ...state,
          appointments,
          interview: null,
          days: newDays})
      })
    }

  const setDay = day => setState({ ...state, day });

  useEffect( () => {
    Promise.all([
    axios.get('/api/days'),
    axios.get('/api/appointments'),
    axios.get('/api/interviewers')
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
    state, setDay, bookInterview, cancelInterview, editInterview
  }
};
