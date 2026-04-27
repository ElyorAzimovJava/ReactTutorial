import MonthCalendar from "./MonthCalendar.jsx";
import {useState} from "react";

function YearCalendar(){
    const [date, setDate] = useState({year: 0, month: 0, day: 0});
    const [year, setYear] = useState(new Date().getFullYear());
    const months = [];
    for(let month=1; month<=12;month++){
        months.push(month);
    }
    const goToPreviousYear = () =>{
     setYear((year) => year -1);
    }
    const goToNextYear = () =>{
        setYear((year) => year +1);
    }
    const  onDateSelected = (year, month, day) => {
        setDate({year, month, day});
    }
    return(<>
        <button onClick={goToPreviousYear}>Previous</button>
        <button onClick={goToNextYear}>Next</button>
        {date.year} : {date.month} : {date.day};
        <hr/>
        {months.map(month=> <MonthCalendar year ={year} month={month} onDateSelected={onDateSelected}/>)}
    </>)
}
export default YearCalendar;