// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import RaceBackground from '../RaceBackground'
import './style.css'

function PlayerBar({player, playerState, callbacks}) {
  const eliminateThisPlayer = () => {
    callbacks.eliminatePlayer(player.id, !playerState.isEliminated)
  }
  return (
    <div className="PlayerBar" onClick={eliminateThisPlayer}>
      <RaceBackground race={player.race} isGrayedOut={playerState.isEliminated}>
        <div className="player">
          {player.name}
        </div>
      </RaceBackground>
    </div>
  )
}

export default PlayerBar
