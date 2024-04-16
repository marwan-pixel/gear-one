import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import Home from "./components/Home.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <input type="text" value={text} onChange={handleChange} />
        <p>{text}</p>
      </div>

      <Home></Home>
    </>
  );
}

export default App;
