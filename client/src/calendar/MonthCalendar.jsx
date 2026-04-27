import { useEffect, useState } from "react";

function MonthCalendar({year,month,onDateSelected}){
    year = year || new Date().getFullYear();
    month = month || new Date().getMonth()+1;

    // this is type check
    year = typeof year === "number" ? year : new Date().getFullYear();
    month = typeof month === "number" ? month : new Date().getMonth()+1;

    year = year > 0 ? year : new Date().getFullYear();
    month = month >= 1 && month <= 12 ? month : new Date().getMonth()+1;
  //  const[year, setYear] =  useState(0);
    const [monthName, setMonthName] = useState("");
    const [dates, setDates] = useState([]);
   const [calendar, setCalendar] = useState({year: 0, monthName: "", dates: []});
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const dayNames = ["Su", "Mo", "Tu", "We","Th", "Fr","Sa"];


    useEffect(()=> {
       // const currentDate = new Date();
       setMonthName(monthNames[month-1]);
      //  setYear(currentDate.getFullYear());
        const daysInMonth = new Date(year, 0, 0).getDate();
        const firstDayOfWeekInMonth = new Date(year, month-1, 1).getDay();
        const days = new Array(42);
        days.fill('');
        for(let i = firstDayOfWeekInMonth, day = 1; day <= daysInMonth; ++day, ++i){
           days[i] = day;
        }
        setDates(days);

    },[year, month]);

    return(
        <div className="calendar-box">
            <div className="calendar-box-header">
                {year} - {monthName}
            </div>
            <div className="calendar-box-header">
                {dayNames.map((dayName) => <div className="calendar-dayname">{dayName}</div>)}
            </div>
            <div>
                {dates.map(day => <div className="calendar-date" onClick={() => onDateSelected(year, month, day)}>{day}</div>)}
            </div>
        </div>);
}
export default MonthCalendar;