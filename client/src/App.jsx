
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import BooksEditing from './book/BooksEditing'
import OnlineTest from './onlineTest/OnlineTest';
import Increment from './counter/Increment';
import Decrement from './counter/Decrement';
import DigitalClock from "./clock/DigitalClock.jsx";
import YearCalendar from "./calendar/YearCalendar.jsx";
import AnalogClock from "./clock/AnalogClock.jsx";

function App() {
  return (
    <div className='container'>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/onlinetest">Online Test</NavLink>
      <NavLink to="/increment">Increment</NavLink>
      <NavLink to="/decrement">Decrement</NavLink>
      <NavLink to="/digitalclock">Digital Clock</NavLink>
      <NavLink to="/calendar">Calendar</NavLink>
      <NavLink to="/analogClock">Analog Clock</NavLink>
    </nav>
     <Routes>
       <Route path='/' element={<BooksEditing/>}/>
       <Route path='/onlinetest' element={<OnlineTest/>}/>
       <Route path='/increment' element={<Increment/>}/>
       <Route path='/decrement' element={<Decrement/>}/>
       <Route path='/digitalclock' element={<DigitalClock/>}/>
       <Route path='/calendar' element={<YearCalendar/>}/>
       <Route path='/analogclock' element={<AnalogClock/>}/>
     </Routes>
    </div>
  )
}

export default App;
