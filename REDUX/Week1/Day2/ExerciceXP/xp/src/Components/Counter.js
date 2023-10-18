import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount,decrementByAmount } from "../reducers/index";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <ul>
            {btns.map(btn => 
                <li>
                    <button key={btn} onClick={() => dispatch(incrementByAmount(btn))}> + {btn}</button>
                    <button key={btn} onClick={()=> dispatch(decrementByAmount(btn))}> - {btn}</button>
                </li>
                )}
        </ul>
      </div>
    </div>
  );
}

export default Counter;
