// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import {useState} from 'react'
import RaceGroup from '../RaceGroup'
import './style.css'

function SurvivorsScoreboard({config}) {
  const {players, misc} = config
  const races = ['t', 'p', 'z']

  // Generate "isEliminated" state for all players by ID.
  const allPlayers = [...Object.values(players)].flat()
  const initialState = Object.fromEntries(allPlayers.map(player => player.id).map(id => [id, {isEliminated: false}]))
  const [state, setState] = useState(initialState)

  const eliminatePlayer = (id, eliminationState = true) => {
    const newState = {...state}
    console.log('ns', newState)
    newState[id].isEliminated = eliminationState
    setState({...state, ...newState})
  }
  
  return (
    <div className="SurvivorsScoreboard">
      {races.map(race => <RaceGroup race={race} key={race} players={players[race]} playerState={state} callbacks={{eliminatePlayer}} />)}
    </div>
  )
}

export default SurvivorsScoreboard
