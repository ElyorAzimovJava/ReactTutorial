
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import BooksEditing from './book/BooksEditing'
import OnlineTest from './onlineTest/OnlineTest';
import Increment from './counter/Increment';
import Decrement from './counter/Decrement';
import DigitalClock from "./clock/DigitalClock.jsx";
import YearCalendar from "./calendar/YearCalendar.jsx";
import AnalogClock from "./clock/AnalogClock.jsx";
import ClockManager from "./clock/ClockManager.jsx";
import TabsController from "./tabs/TabsController.jsx";
import Demo1 from "./tabs/Demo1.jsx";
import Demo2 from "./tabs/Demo2.jsx";
import Demo3 from "./tabs/Demo3.jsx";
import {lazy, Suspense} from "react";

const About = lazy(() => import("./about/About"));
function App() {
  return (
    <div className='container'>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/onlinetest">Online Test</NavLink>
      <NavLink to="/increment">Increment</NavLink>
      <NavLink to="/decrement">Decrement</NavLink>
      <NavLink to="/calendar">Calendar</NavLink>
      <NavLink to="/clocks">Clocks</NavLink>
      <NavLink to="/tab">Tab</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
     <Routes>
       <Route path='/' element={<BooksEditing/>}/>
       <Route path='/onlinetest' element={<OnlineTest/>}/>
       <Route path='/increment' element={<Increment/>}/>
       <Route path='/decrement' element={<Decrement/>}/>
       <Route path='/calendar' element={<YearCalendar/>}/>
       <Route path='/clocks' element={<ClockManager/>}>Clocks</Route>
       <Route path='/tab' element={<TabsController/>}>Tab
           <Route element={<Demo1/>} path='/tab/demo1'/>
           <Route element={<Demo2/>} path='/tab/demo2'/>
           <Route element={<Demo3/>} path='/tab/demo3'/>
       </Route>
         <Route path = '/about' element= {
             <Suspense fallback={<div>Loading...</div>}>
                 <About/></Suspense>}/>
     </Routes>
    </div>
  )
}

export default App;
