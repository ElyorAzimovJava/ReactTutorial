import {useEffect, useState} from "react";

function DigitalClock(){
    const [count, setCount] = useState(0);
    useEffect(() => { // will be called when component mounts
       const timerId=  window.setInterval(() => {
           setCount(count =>  count+1);
        }, 1000);
       //DTOR : Will be called before component is killed
        // Register a lambda to be called when component unmounts
        return ()=>{
          window.clearInterval(timerId);
        }
    },[])
    return (<>{count}</>);
}
export default DigitalClock;