import React, { useState } from "react";

import "./Counter.css"
const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);
    const [inputVal, setInputVal] = useState(1);

    const addToCounter = () => {
        setCounterValue(prev => prev + inputVal);
    }

    const subtractFromCounter = () => {
        setCounterValue(prev => prev - inputVal);
    }

    return (
        <div>
            <h2 data-testid="header" >My Counter</h2>
            <h1 
            data-testid="counter"
            className={`${counterValue > 99 ? "green" : ""}${counterValue < 0 ? "red" : ""}`}
            >{counterValue}</h1>

            <button
                data-testid="subtract-btn"
                onClick={subtractFromCounter}
            >
                -
            </button>
            <input
                type="number"
                data-testid="input"
                value={inputVal}
                className="text-center"
                onChange={(e) => {
                    setInputVal(parseInt(e.target.value))
                }}
            />
            <button
                data-testid="add-btn"
                onClick={addToCounter}
            >
                +
            </button>

        </div>
    );
}

export default Counter;
