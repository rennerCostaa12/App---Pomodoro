import React from "react";

import { 
    ContainerModal, 
    ContentModal, 
    HeaderModal, 
    BodyModal, 
    TitleHeader, 
    BtnCloseModal ,
    ContainerChangeValueTimer,
    TextsTimerModal,
    ContainerChangeColor,
    ContentColors,
    SpanColor1,
    SpanColor2,
    SpanColor3

} from "./style-component/modalSettingStyle";

import InputsValueTimer from "./InputsValueModal";

const ModalSetting = ({valuePomodoroMode, valueShortBreakMode, valueLongBreakMode}) =>{
    return(
        <ContainerModal id="container-modal">
            <ContentModal>
                <HeaderModal>
                    <TitleHeader>Settings</TitleHeader>
                    <BtnCloseModal id="btn-close-modal">X</BtnCloseModal>
                </HeaderModal>
                <BodyModal>
                    <TextsTimerModal>TIME (MINUTES)</TextsTimerModal>
                    <ContainerChangeValueTimer>
                        <InputsValueTimer nameInput="pomodoro" valueInput={valuePomodoroMode} />
                        <InputsValueTimer nameInput="short break" valueInput={valueShortBreakMode} />
                        <InputsValueTimer nameInput="long break" valueInput={valueLongBreakMode} />
                    </ContainerChangeValueTimer>
                    
                    <ContainerChangeColor>
                        <TextsTimerModal>COLOR</TextsTimerModal>
                        <ContentColors>
                            <SpanColor1 />
                            <SpanColor2 />
                            <SpanColor3 />
                        </ContentColors>
                    </ContainerChangeColor>
                </BodyModal>
            </ContentModal>
        </ContainerModal>
    )
}

export default ModalSetting;