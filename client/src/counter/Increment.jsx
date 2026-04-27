import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "./counterSlice";
function Increment() {
    const count = useSelector((state) => state.counterReducer.count);
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch(increment())
    };
    return (<>
        {count}
        <br />
        <button onClick={onIncrement}>+</button>
    </>);
}
export default Increment;