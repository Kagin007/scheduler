import React from "react";
import DayListItem from "./DayListItem";

const DayList = (props) => {
  const dayList = props.days
  const newList = dayList.map(object => 
    <DayListItem 
      key={object.id}
      name={object.name}
      spots={object.spots}
      selected={object.name === props.value}
      setDay={props.onChange}/>
  )
  return (
    <ul>
      {newList}
    </ul>
  )
}


export default DayList;