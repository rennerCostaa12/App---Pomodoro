import React from "react";

const Buttons = ({function_button, name_button}) => {
    return <button onClick={function_button}>{name_button}</button>;
}  

export default Buttons;