import rock from "../assets/rock.png";
import scissors from '../assets/scissors.png';
import paper from '../assets/paper.png';
import { useState } from "react";

function Player({ name = 'Player', score = 0, option = "rock" }) {
  return (
    <div className="player">
      <h2>{name}</h2>
      <p className="scoreNumber">{score}</p>
      <div className="option">
        {option && <PlayerOption option={option} name={name} />}
      </div>
    </div>
  )
}

function PlayerOption({ option, name, ...props }) {
  const images = {
    rock: rock,
    paper: paper,
    scissors: scissors
  }

  const image = images[option]
  return(
    <img {...props} src={image} alt={image} className={name === 'Player' ? 'playerHand' : ""} />
  )
}

function OptionButton({ option = "rock", onOptionSelected }) {
  return (
    <button onClick={() => onOptionSelected(option)}>{option}</button>
  )
}

function ShowWinner({ winner = 0 }) {
  const text = {
    "-1": "You win",
    0: "It's a tie",
    1: "Computer wins"
  }
  return (
    <h2>{text[winner]}</h2>
  )
}

const options = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
}

function computerPlaying() {
  const keys = Object.keys(options)
  const index = Math.floor(Math.random() * keys.length)

  return keys[index]
}

function evaluateWinner(option1, option2) {
  if (option1 === option2) {
    return 0
  } else if (options[option1] === option2) {
    return -1
  } else if (options[option2] === option1) {
    return 1
  }
  return null
}

export function Match() {
  const [playerAction, setPlayerAction] = useState("")
  const [computerAction, setComputerAction] = useState("")
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [winner, setWinner] = useState("")

  const onOptionSelected = (selectedAction) => {
    const newComputerAction = computerPlaying()

    setPlayerAction(selectedAction)
    setComputerAction(newComputerAction)

    const newWinner = evaluateWinner(selectedAction, newComputerAction)
    setWinner(newWinner)
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1)
    } else if (newWinner === 1) {
      setComputerScore(computerScore + 1)
    } 
  }

  return (
    <div className="match">    
      <h2 className="winner">Choose an option</h2>
      <div className="options">
        <OptionButton option="rock" onOptionSelected={onOptionSelected}/>
        <OptionButton option="paper" onOptionSelected={onOptionSelected}/>
        <OptionButton option="scissors" onOptionSelected={onOptionSelected}/>
      </div>  
      <div className="score">
        <Player name="Player" score={playerScore} option={playerAction}/>
        <Player name="Computer" score={computerScore} option={computerAction}/>
      </div>
      <ShowWinner winner={winner}/>
    </div>
  )
}