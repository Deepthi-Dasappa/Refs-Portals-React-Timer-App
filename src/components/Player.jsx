import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const playerName = useRef();

  function handleButtonClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player my-5" className="text-center py-8">
      <h2 className="text-cyan-200 mb-5 font-semibold text-xl">
        Welcome {enteredPlayerName ?? "unknown entity"}
      </h2>
      <p className="flex justify-center items-center">
        <input
          ref={playerName}
          type="text"
          // className="border-2 border-solid border-black rounded-r-none p-1 text-cyan-900"
          className="rounded-l-md p-1 text-cyan-900  outline-none"
        />
        <button
          onClick={handleButtonClick}
          className="border-2 border-solid border-black rounded-r-md py-1 px-2 text-black bg-cyan-200 hover:bg-cyan-400 "
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
