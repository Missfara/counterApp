import React from "react";
import { useReducer, useState } from "react";
import { reducer, initialState } from "./countReducer";

import {
  INC_COUNT,
  DEC_COUNT,
  RESET_COUNT,
  ADD_VALUE,
  REDUCE_VALUE,
} from "./types";
import "./counter.css";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState(+0);
  const data = (e) => {
    setInput(+e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="count-bar">
          <label htmlFor="" className="count-bar-label">
            Total
          </label>
          <p>{state.number}</p>
        </div>
        <div className="count-text">
          <label htmlFor="" className="input-label">
            Type any number
          </label>
          <input
            type="number"
            onChange={data}
            className="count-input"
            placeholder="enter any number"
            value={input}
          />
        </div>

        <div className="values">
          <button
            onClick={() => {
              dispatch({ type: ADD_VALUE, payload: input });
              setInput(0);
            }}
          >
            Adds number
          </button>
          <button
            onClick={() => {
              dispatch({ type: REDUCE_VALUE, payload: input });
              setInput(0);
            }}
          >
            Subtracts number
          </button>
        </div>
        <div className="values">
          <button onClick={() => dispatch({ type: INC_COUNT })}>
            Adds (+1){" "}
          </button>
          <button onClick={() => dispatch({ type: DEC_COUNT })}>
            Minus (-1)
          </button>
        </div>
        <div className="reset">
          <button onClick={() => dispatch({ type: RESET_COUNT })}>
            Reset (0){" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
