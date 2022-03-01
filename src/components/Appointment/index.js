import React from 'react';
import "./styles.scss";
import Header from "./Header.js";
import Empty from "./Empty.js";
import Show from "./Show.js";
import Form from "./Form.js";
import Status from "./Status.js";
import Confirm from "./Confirm.js";
import Error from "./Error.js";
import useVisualMode from 'hooks/useVisualMode';

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETE = "DELETE";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

const Appointment = function (props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function edit() {
    transition(CREATE)
  };

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING)

    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(error => transition(ERROR_SAVE, true));

  }  

  function cancel(name, interviewer) {
    const interview = {
      student: null,
      interviewer: null
    };

    transition(DELETE)

    props.cancelInterview(props.id, interview)
    .then(() => {
      console.log('transition to confirm!!')
      transition(EMPTY)
    })
    .catch(error => {transition(ERROR_DELETE, true)})
  }

  return (
    
    <article className="appointment">
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          cancel={() => transition(CONFIRM)}
          edit={edit}
        />
      )}
      {mode === CREATE && (
        <Form
          student={props.interview && props.interview.student}
          interviewer={
            props.interview && props.interview.interviewer.id}
          interviewers={props.interviews}
          save={save}
          // onSave={}
          onCancel={()=>back()}
        />
      )}
      {mode === SAVING && (
        <Status 
          message={"Saving..."}
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          message={"Delete the appointment?"}
          onCancel={()=>back()}
          onConfirm={cancel}
        />
      )}
      {mode === DELETE && (
        <Status
          message={"Deleting..."}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error
          message={"Error posting to server..."}
          onClose={()=> back()}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          message={"Error deleting from server..."}
          onClose={()=>transition(SHOW)}
        />
      )}
    </article>
  );
}

export default Appointment;