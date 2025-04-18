import "./styles.css";
import { useState } from "react";

function Welcome({ name }) {
  return <h1 className="text-2xl">Welcome, {name}!</h1>;
}

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="p-8">
      <Welcome name="Mbiza" />
      <button
        onClick={() => setShowMessage((prev) => !prev)}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
      >
        {showMessage ? "Hide" : "Show"} Secret Message
      </button>
      {showMessage && <p className="mt-2">This is a toggled message!</p>}
    </div>
  );
}
