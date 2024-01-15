export const GameIntro = ({ handlePlay }) => (
  <div className="intro">
    <h1>Rock Paper Scissors</h1>
    <button className="play" onClick={handlePlay}>Start Game</button>
  </div>
)