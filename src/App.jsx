import "./App.css";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const onClickNumber = (number) => {
    if (!operator) {
      setNum1(num1 + number);
    } else {
      setNum2(num2 + number);
    }
  };

  const calculator = (mark) => {
    if (
      mark === "+" ||
      mark === "-" ||
      mark === "x" ||
      mark === "/"
    ) {
      setOperator(mark);
      return;
    } else if (mark === "=") {
      const a = Number(num1);
      const b = Number(num2);
      let result = 0;

      switch (operator) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "x":
          result = a * b;
          break;
        case "/":
          result = b !== 0 ? a / b : "0으로 나눌 수 없음";
          break;
        default:
          result = 0;
      }

      setResult(result);
    }
  };

  const onClickAc = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult(null);
  };

  return (
    <>
      <h1>계산기!</h1>
      <div className="display">
        <div className="input-line">
          {num1}
          {operator}
          {num2}
        </div>
        <div className="result-line">
          {result === null ? "" : result}
        </div>
      </div>

      <div className="numbers">
        <div>
          <button
            onClick={() => {
              onClickNumber("7");
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              onClickNumber("8");
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              onClickNumber("9");
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              calculator("x");
            }}
          >
            x
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              onClickNumber("4");
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              onClickNumber("5");
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              onClickNumber("6");
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              calculator("-");
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              onClickNumber("1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              onClickNumber("2");
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              onClickNumber("3");
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              calculator("+");
            }}
          >
            +
          </button>
        </div>

        <div>
          <button
            onClick={() => {
              onClickAc();
            }}
          >
            AC
          </button>
          <button
            onClick={() => {
              onClickNumber("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              calculator("=");
            }}
          >
            =
          </button>
          <button
            onClick={() => {
              calculator("/");
            }}
          >
            /
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
