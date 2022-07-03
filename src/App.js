import './App.css';
import {useEffect, useRef, useState} from "react";


function App() {
    const [timerDays,setTimerDays] = useState("00")
    const [timerHours,setTimerHours] = useState("00")
    const [timerMinutes,setTimerMinutes] = useState("00")
    const [timerSeconds,setTimerSeconds] = useState("00")
    let interval = useRef()
    const startTimer = ()=>{
        const countDownsDate = new Date('October 10 2022 00:00:00').getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countDownsDate- now;

            const days = Math.floor((distance / (1000 * 60 * 60 *24)))
            const hours = Math.floor((distance % (1000 * 60 * 60 *24))/(1000*60*60))
            const mins = Math.floor((distance % (1000 * 60 * 60 ))/(1000*60))
            const secs = Math.floor((distance % (1000 * 60 ))/1000)

            if(distance < 0){
                //stop timer
                clearInterval(interval.current)
            }else{
                //update timer
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(mins)
                setTimerSeconds(secs)
            }
        },1000)
    }
    useEffect(()=>{
        startTimer();
        return()=>{
            clearInterval(interval.current)
        }
    })
  return (
      <section className='timer-container'>
        <section className='timer'>
            <div>
                <span className="mdi mdi-calendar-clock timer-icon"></span>
                <h2>
                    Countdown for the love of my life's birthday
                </h2>
                <p>
                    Countdown to a really special date to my heart!
                </p>
            </div>
            <div>
                <section>
                    <p>
                        {timerDays}
                    </p>
                    <p><small>Days</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>
                        {timerHours}
                    </p>
                    <p><small>Hours</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>
                        {timerMinutes}
                    </p>
                    <p><small>Minutes</small></p>
                </section>
                <span>:</span>
                <section>
                    <p>
                        {timerSeconds}
                    </p>
                    <p><small>Seconds</small></p>
                </section>
            </div>
        </section>
      </section>
  );
}

export default App;
