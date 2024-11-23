import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

export default function App() {
  return (
    <div
      id="container"
      className="max-w-2xl my-8 mx-auto bg-black rounded-2xl shadow-md shadow-black"
    >
      <Player />
      <div
        id="challenges"
        className="max-w-40 md:max-w-xl flex flex-wrap gap-8 justify-center my-7 mx-auto"
      >
        <TimerChallenge title="easy" targetTime={1} />
        <TimerChallenge title="not easy" targetTime={5} />
        <TimerChallenge title="getting tough" targetTime={10} />
        <TimerChallenge title="pros only" targetTime={15} />
      </div>
    </div>
  );
}
