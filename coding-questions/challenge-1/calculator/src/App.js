import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [total, setTotal] = useState("");

  const countTotal = (event) => {
    event.preventDefault();
    setTotal(Number(firstNumber) + Number(secondNumber));
  };

  return (
    <div
      className="App"
      style={{ margin: "100px auto 0", width: "max-content" }}
    >
      <h1>Adding Two Numbers</h1>
      <form
        onSubmit={countTotal}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "max-content",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <input
            name="first-number"
            placeholder="First Number"
            value={firstNumber}
            onChange={(event) => setFirstNumber(event.target.value)}
            type="number"
          />
          <input
            name="second-number"
            placeholder="Second Number"
            value={secondNumber}
            onChange={(event) => setSecondNumber(event.target.value)}
            type="number"
          />
        </div>

        <button type="submit">Add Two Numbers</button>
      </form>

      <p>Total: {total}</p>
    </div>
  );
}

export default App;
