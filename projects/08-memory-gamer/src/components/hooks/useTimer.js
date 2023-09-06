import { useEffect, useState } from "react"

export const useTimer = (onTimeChange, isWin, isPaused) => {
    const [time, setTime] = useState({minutes: 0, seconds: 0})

    const resetTime = () => {
        setTime({minutes: 0, seconds: 0})
    }

    useEffect(() => { 
        let timer 

        if( !isPaused && !isWin){
         timer = setInterval(() => {
            const prev = {...time}
    
            if(prev.seconds === 59){
                prev.minutes = prev.minutes + 1
                prev.seconds = 0  
            } else {
                prev.seconds =  prev.seconds + 1
            }
            setTime(prev)
            onTimeChange(prev)
    
        }, 1000);
        }

        return () => clearInterval(timer)
    }, [time, isPaused, isWin])


    return {
        time,
        resetTime
    }

}