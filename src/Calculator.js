import React from 'react';
import {FormulaDisplay} from './FormulaDisplay';
import {InputDisplay} from './InputDisplay';

function Calculator(props) {
    return <div className="calculator">
          <div className="display">
            <FormulaDisplay />
            <InputDisplay />
          </div>
          <div className="buttons">
            <button id="clear" value="AC">AC</button>
            <button id="divide" value="/">/</button>
            <button id="multiply" value="x">x</button>
            <button id="seven" value="7">7</button>
            <button id="eight" value="8">8</button>
            <button id="nine" value="9">9</button>
            <button id="subtract" value="-">-</button>
            <button id="four" value="4">4</button>
            <button id="five" value="5">5</button>
            <button id="six" value="6">6</button>
            <button id="add" value="+">+</button>
            <button id="one" value="1">1</button>
            <button id="two" value="2">2</button>
            <button id="three" value="3">3</button>
            <button id="zero" value="0">0</button>
            <button id="decimal" value=".">.</button>
            <button id="equals" value="=">=</button>
          </div>;
        </div>
}

export default Calculator;
