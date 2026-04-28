import DigitalClock from "./DigitalClock.jsx";
import AnalogClock from "./AnalogClock.jsx";

function ClockManager(){
    return(<>
        <DigitalClock/>
        <AnalogClock/>
        <AnalogClock/>
    </>);
}
export default ClockManager;