// HOOKS
import { useState } from 'react';

// STYLE
import { GlobalStyle } from './GlobalStyle';
import {
  Container,
  Content,
  TitleApp,
  ContainerButtons,
  NumberTimer,
  ButtonStartPause,
  ContainerButtonStartPause,
  ContainerProgressBar,
  ContentProgessBar,
  ContainerBTNTIMER,
  MessageZeroTime,
  ContainerBtnConfig,
  ContentBtnConfig
} from './MainStyle';

// COMPONENTS
import Buttons from './components/Buttons';
import CountdownTimer from './components/CountdownTimer';
import ConfigApp from './components/ConfigApp';
import ModalSetting from './components/modalSetting';

// SOUND
import SoundAlarm from './sounds/soundarlame2.wav'
import ReactAudioPlayer from 'react-audio-player';

import './icons/Icons';


function App() {

  const [duration, setDuration] = useState(25 * 60);
  const [player, setPlayer] = useState(false);
  const [key, setKey] = useState(0);
  
  const formatRemainingTime = (timer) => {
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    return `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
  };

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return (
        <>
          <MessageZeroTime> TEMPO ACABOU! </MessageZeroTime>
          <ReactAudioPlayer src={SoundAlarm} autoPlay />
        </>
      )
    }
    return (
      <div className="timer">
        <NumberTimer>
          {formatRemainingTime(remainingTime)}
        </NumberTimer>
      </div>
    );
  };


  const PomodoroMode = () => {
    setDuration(25 * 60); // DURAÇÂO DO TIMER
    setKey(prevKey => prevKey + 1); // RESTARTA O TIMER
    setPlayer(false); // VALOR BOOLEAN DO PAUSE
  }

  const ShortBreakMode = () => {
    setDuration(5*60); // DURAÇÂO DO TIMER
    setKey(prevKey => prevKey + 1); // RESTARTA O TIMER
    setPlayer(false); // VALOR BOOLEAN DO PAUSE
  }

  const LongBreakMode = () => {
    setDuration(15*60); // DURAÇÂO DO TIMER
    setKey(prevKey => prevKey + 1); // RESTARTA O TIMER
    setPlayer(false); // VALOR BOOLEAN DO PAUSE
  }

  const StartTime = () => {
    if (player === false) {
      setPlayer(true)
    } else {
      setPlayer(false);
    }
  }

  const OpenModalConfigApp = () =>{
    const Container_Modal = document.getElementById('container-modal');
    const Btn_Close_Modal = document.getElementById('btn-close-modal');
    Container_Modal.style.display = 'block';

    Btn_Close_Modal.addEventListener('click', (e)=>{
      Container_Modal.style.display = 'none';
    })
  }

  return (
    <Container>
      <GlobalStyle />

      <Content>
        <TitleApp>pomodoro</TitleApp>
        <ContainerButtons>
          <Buttons function_button={PomodoroMode} name_button="Pomodoro" />
          <Buttons function_button={ShortBreakMode} name_button="Short break" />
          <Buttons function_button={LongBreakMode} name_button="Long break" />
        </ContainerButtons>

        <ContainerProgressBar>
          <ContentProgessBar>
            <CountdownTimer
              playBoolean={player}
              durationTimer={duration}
              key={key}
              Timer={renderTime}
            />
          </ContentProgessBar>
        </ContainerProgressBar>

        <ContainerBTNTIMER>
          <ContainerButtonStartPause>
            <ButtonStartPause onClick={StartTime}>{player ? "Pause" : "Start"}</ButtonStartPause>
          </ContainerButtonStartPause>
        </ContainerBTNTIMER>

      <ContainerBtnConfig>
        <ContentBtnConfig>
          <ConfigApp funcao={OpenModalConfigApp} title_btn="Configurar" />
        </ContentBtnConfig> 
      </ContainerBtnConfig>

      <ModalSetting valuePomodoroMode={duration} valueShortBreakMode={duration} valueLongBreakMode={duration}/>

      </Content>
    </Container>
  );
}

export default App;