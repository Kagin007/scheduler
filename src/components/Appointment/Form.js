import React, {useState} from 'react';
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

const Form = function(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset=()=> {
    setStudent("")
    setInterviewer(null)
  }

  const cancel=()=> {
    reset()
    props.onCancel()
  }

  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      console.log(interviewer)
      return;
    }
    if (interviewer === null) {
      setError("Interviewer cannot be blank");
      return;
    }
    setError("");
    props.save(student, interviewer);
  }

  return (
  <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form onSubmit={event => event.preventDefault()} autoComplete="off">
        <input
          className="appointment__create-input text--semi-bold"
          name="name"
          type="text"
          placeholder="Enter Student Name"
          /*
            This must be a controlled component
            your code goes here
          */
          value={student}
          onChange={(event)=> setStudent(event.target.value)}
        data-testid="student-name-input"
        />
      <section className="appointment__validation">{error}</section>
      </form>
      <InterviewerList 
        /* your code goes here */
        value={interviewer}
        onChange={setInterviewer}
        interviewers={props.interviewers}
      />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={cancel}>Cancel</Button>
        <Button confirm onClick={
          ()=>{validate()}
          
          }>Save</Button>
      </section>
    </section>
  </main>
  );
}

export default Form;