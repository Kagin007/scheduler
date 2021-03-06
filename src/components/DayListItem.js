import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classNames(
    "day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (props.spots === 0)
  })
  return (
    <li 
      data-testid={props.name} className={dayClass}
      onClick={()=> props.setDay(props.name)}>
      <h2>{props.name}</h2> 
      {props.spots === 1 && <h3>{props.spots} spot remaining</h3>}
      {props.spots === 0 && <h3>no spots remaining</h3>}
      {props.spots > 1 && <h3>{props.spots} spots remaining</h3>}
    </li>
  );
}