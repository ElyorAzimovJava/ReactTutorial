import {useEffect, useState} from "react";

function DigitalClock(){
    const [hour, setHour] = useState(new Date().getHours());
    const [minute, setMinute] = useState(new Date().getMinutes());
    const [second, setSecond] = useState(new Date().getSeconds());
    useEffect(() => { // will be called when component mounts
       const timerId=  window.setInterval(() => {
            setHour(new Date().getHours());
            setMinute(new Date().getMinutes());
            setSecond(new Date().getSeconds());
        }, 1000);
       //DTOR : Will be called before component is killed
        // Register a lambda to be called when component unmounts
        return ()=>{
          window.clearInterval(timerId);
        }
    },[])
    return (<>

        <h1>
            {hour}:{minute}:{second}</h1>
        </>);
}
export default DigitalClock;