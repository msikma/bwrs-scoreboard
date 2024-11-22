// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import RaceIcon from '../RaceIcon'
import RaceBackground from '../RaceBackground'
import './style.css'

function RaceHeader({race, isEliminated = false}) {
  return (
    <RaceBackground className="RaceHeader" race={race} isGrayedOut={isEliminated}>
      <RaceIcon white race={race} />
    </RaceBackground>
  )
}

export default RaceHeader
