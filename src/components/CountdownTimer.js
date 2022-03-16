import React from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownTimer = ({ playBoolean, durationTimer, key, Timer }) =>{
    return(
        <div>
            <CountdownCircleTimer
              isPlaying={playBoolean}
              duration={durationTimer}
              key={key}
              colors={['#F8767A']}
              size={375}
              onComplete={() => {
                //WHEN THE TIMER REACHES ZERO
              }}
            >
              {Timer}
            </CountdownCircleTimer>
        </div>

    )
}

export default CountdownTimer;