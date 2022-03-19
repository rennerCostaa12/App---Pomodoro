import React from "react";
import { ContentInput } from "./style-component/InputModalStyle";

const InputsValueTimer = ({ valueInput, nameInput }) =>{
    return(
        <ContentInput>
            <h6>{nameInput}</h6>
            <input type="number"value={valueInput}/>
        </ContentInput>
        
    ) 
}

export default InputsValueTimer;