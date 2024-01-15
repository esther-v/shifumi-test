import { useState } from 'react';
import './App.css';
import { GameIntro } from './components/GameIntro';
import { Match } from './components/Match';

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlay = e => setIsPlaying(current => !current)
  return (
    <div className="App">
      {isPlaying ?  <Match /> : <GameIntro isPlaying={isPlaying} handlePlay={handlePlay} />}
    </div>
  );
}

export default App;
