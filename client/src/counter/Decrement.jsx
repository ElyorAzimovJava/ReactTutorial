import { decrement } from "./counterSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function Decrement() {
    const count = useSelector((state) => state.counterReducer.count);
    const dispatch = useDispatch();
    const onDecrement = () => {
        dispatch(decrement());
    };
    return (<>
        {count}
        <br />
        <button onClick={onDecrement}>-</button>
    </>);
}
export default Decrement;