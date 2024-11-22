// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import PlayerBar from '../PlayerBar'
import RaceHeader from '../RaceHeader'
import './style.css'

function RaceGroup({race, players, playerState, callbacks}) {
  const allPlayersEliminated = Object.entries(playerState)
    .filter(([id, state]) => id.startsWith(`${race}-`))
    .every(([id, state]) => state.isEliminated === true)
  
  return (
    <div className={`RaceGroup r-${race}`}>
      <RaceHeader race={race} isEliminated={allPlayersEliminated} />
      <div className="players">
        {players.map((player, n) => <PlayerBar player={player} playerState={playerState[player.id]} callbacks={callbacks} key={n} />)}
      </div>
    </div>
  )
}

export default RaceGroup
