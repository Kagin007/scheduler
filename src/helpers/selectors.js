// const state = {
//   days: [
//     {
//       id: 1,
//       name: "Monday",
//       appointments: [1, 2, 3],
//       interviewers: [2, 6, 7, 8, 10]
//     },
//     {
//       id: 2,
//       name: "Tuesday",
//       appointments: [4, 5],
//       interviewers: [6, 7, 8, 9, 10]
//     }
//   ],
//   appointments: {
//     "1": { id: 1, time: "12pm", interview: null },
//     "2": { id: 2, time: "1pm", interview: null },
//     "3": {
//       id: 3,
//       time: "2pm",
//       interview: { student: "Archie Cohen", interviewer: 2 }
//     },
//     "4": { id: 4, time: "3pm", interview: null },
//     "5": {
//       id: 5,
//       time: "4pm",
//       interview: { student: "Chad Takahashi", interviewer: 2 }
//     }
//   },

//   interviewers: {
//     "1": {  
//       "id": 1,
//       "name": "Sylvia Palmer",
//       "avatar": "https://i.imgur.com/LpaY82x.png"
//     },
//     "2": {
//       id: 2,
//       name: "Tori Malcolm",
//       avatar: "https://i.imgur.com/Nmx0Qxo.png"
//     }
//   }

// };

export function getAppointmentsForDay(state, day) {

  const foundDay = state.days.find(appts => appts.name === day)
  
  if(!foundDay) {
    return []
  }

  return foundDay.appointments.map(num => state.appointments[num])
};

export function getInterview(state, interview=null) {

  //check if there is an interview
  if(!interview) { return null }

  const interviewObj = {}
  //get interviewer id for the appointment
  const interviewer = interview.interviewer

  //create student key for new obj
  interviewObj.student = interview.student

  //add interviewer info to new obj
  interviewObj.interviewer = {
    ...state.interviewers[interviewer]
  }

  return interviewObj 
  
};

export function getInterviewersForDay(state, day) {
  const foundDay = state.days.find(appts => appts.name === day)
  
  if(!foundDay) {
    return []
  }

  return foundDay.interviewers.map(num => state.interviewers[num])
}