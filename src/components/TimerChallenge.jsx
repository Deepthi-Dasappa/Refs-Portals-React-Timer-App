import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();

  let timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function restart() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStartClick() {
    timer.current = setInterval(() => {
      setTimeRemaining((previousTimeRemaining) => {
        return previousTimeRemaining - 100;
      });
    }, 100);
  }

  function handleStopClick() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onRestart={restart}
      />
      <section className="challenge min-w-60 md:min-w-50 flex flex-col gap-6 items-center bg-gradient-to-r from-cyan-600 to-cyan-300 mb-1 md:my-4 mx-4 py-4 px-6 text-black shadow-md shadow-cyan-600 rounded-sm">
        <h2 className="text-xl tracking-wide uppercase font-extrabold">
          {title}
        </h2>
        <p className="challenge-time text-sm border border-cyan-100 rounded-sm px-2 py-1">
          {targetTime} second
          {targetTime > 1 ? "s" : ""}
        </p>
        <button
          className={`rounded-md bg-black text-white px-2 py-1 font-extralight hover:bg-green-500 ${
            timerIsActive ? "hover:bg-red-400" : undefined
          }`}
          onClick={timerIsActive ? handleStopClick : handleStartClick}
        >
          {timerIsActive ? "Stop" : "Start"} challenge
        </button>

        <p className={`text-sm ${timerIsActive ? "animate-pulse" : undefined}`}>
          {timerIsActive ? "Time is running" : "Timer is inactive"}
        </p>
      </section>
    </>
  );
}
