import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConfigApp = ({ funcao, title_btn }) =>{
    return <button onClick={funcao} title={title_btn}> <FontAwesomeIcon icon="gear" /> </button>
}

export default ConfigApp;