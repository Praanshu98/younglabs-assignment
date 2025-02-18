import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("");

  const handleGreet = () => {
    // Setting greet error just to save a backend call, same error is thrown from backend also
    fetch("/api/greet?name=" + name)
      .then((res) => res.json())
      .then((data) => {
        setGreet(data);
        setName("");
      });
  };

  const handleRefresh = () => {
    setGreet("");
    setName("");
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      {greet?.message && <h1 className="text-xl">{greet.message}</h1>}
      <input
        type="text"
        placeholder="Enter your name"
        className="w-96 p-2 text-center text-xl font-bold border-2 border-slate-500 rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex gap-2 items-center justify-center">
        <button
          className="w-44 p-2 text-center text-xl font-bold border-2 border-slate-300 rounded-md text-slate-700"
          onClick={handleGreet}
        >
          Greet
        </button>
        <button
          className="w-44 p-2 text-center text-xl font-bold border-2 border-slate-300 rounded-md text-slate-700"
          onClick={handleRefresh}
        >
          Reset
        </button>
      </div>
      {greet?.error && <h1 className="text-xl text-red-500">{greet.error}</h1>}
    </div>
  );
}
