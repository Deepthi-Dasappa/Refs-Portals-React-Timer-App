import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaining, onRestart },
  ref
) {
  const dialog = useRef();
  const score = Math.round((timeRemaining / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog
      ref={dialog}
      className="result-modal rounded-md p-8 bg-gray-300 backdrop:bg-black"
    >
      <h2 className="font-extrabold text-3xl uppercase">
        {timeRemaining <= 0 ? "You Lost!!" : `Your Score : ${score}`}
      </h2>
      <p className="my-2">
        Your target time was{" "}
        <strong className="text-green-800">{targetTime} seconds</strong>
      </p>
      <p className="my-2">
        You stopped the timer with{" "}
        <strong className="text-green-800">
          {(timeRemaining / 1000).toFixed(2)} seconds left
        </strong>
      </p>
      <form method="dialog" className="text-right" onSubmit={onRestart}>
        <button className="rounded-md bg-black text-white font-mono px-2 py-1 mt-1">
          Close
        </button>
      </form>
    </dialog>
  );
});

export default ResultModal;
