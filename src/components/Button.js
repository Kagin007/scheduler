import React from "react";
import classNames from "classnames";
import "components/Button.scss";

export default function Button(props) {
   const buttonClass = classNames("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger,
      "button--happy": props.happy
   })

   return (
   <>
   <button 
      disabled={props.disabled} onClick={props.onClick} className={buttonClass}
   >
      {props.children}
   </button>
   </>
   );
}
