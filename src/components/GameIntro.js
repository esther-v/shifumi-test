export const GameIntro = ({ isPlaying, handlePlay }) => {
  return (
    <div className={isPlaying ? "intro hide" : "intro"}>
      <h1>Rock Paper Scissors</h1>
      <button className="play" onClick={handlePlay}>Start Game</button>
    </div>
  )
}