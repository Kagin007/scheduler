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