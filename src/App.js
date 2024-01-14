import { useState } from 'react';
import './App.css';
import { Score } from './components/Score';
import { GameIntro } from './components/GameIntro';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = e => setIsPlaying(current => !current)
  return (
    <div className="App">
      <Score />
      <GameIntro isPlaying={isPlaying} handlePlay={handlePlay} />
    </div>
  );
}

export default App;
