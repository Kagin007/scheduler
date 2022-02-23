import React from 'react';
import classNames from 'classnames';
import "components/InterviewerListItem.scss"

function InterviewerListItem(props) {
  const handleClick = () => {
    props.setInterviewer(props.id)
  }
  const interviewStyles = classNames(
    "interviewers__item", {
      "interviewers__item--selected": props.selected
    }
  )
  
  return (
  <li onClick={handleClick} className={interviewStyles}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    { props.selected && props.name }
  </li>
  );
}

export default InterviewerListItem;