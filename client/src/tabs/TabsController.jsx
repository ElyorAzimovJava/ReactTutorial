import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import Demo1 from "./Demo1.jsx";
import Demo2 from "./Demo2.jsx";
import Demo3 from "./Demo3.jsx";

function TabsController(){
    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/tab/demo1'>Demo1</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/tab/demo2'>Demo2</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/tab/demo3'>Demo3</NavLink>
                </li>
            </ul>
            <Outlet></Outlet>
         {/*   <Routes>
                <Route element={<Demo1/>} path='/tab/demo1'/>
                <Route element={<Demo2/>} path='/tab/demo2'/>
                <Route element={<Demo3/>} path='/tab/demo3'/>
            </Routes>*/}
        </>
    )
}

export default TabsController;