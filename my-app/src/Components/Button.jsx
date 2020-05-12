import React from "react";
import "./button.css";

const STYLES = [
    "btn--primary--solid",
    "btn--success--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--primary--outline",
    "btn--success--outline",
    "btn--warning--outline",
    "btn--danger--outline"
];

const SIZE =[
    "btn--medium",
    "btn--small"
];

export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

const checkButtonStyle =STYLES.includes(buttonStyle)
 ? buttonStyle 
 : STYLES[0];

 const checkButtonSize = SIZES.includes(buttonSize)
  ? buttonSize 
  : Sized[0];

    return (

    <button className={'btn ${checkButtonStyle} ${checkButtonSize}'} 
    onClick={onClick} 
    type={type}>
        {children}
    </button>
)

}
