// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import './index.css'
import iconTerran from './race-t.png'
import iconProtoss from './race-p.png'
import iconZerg from './race-z.png'
import iconUnknown from './race-unknown.png'
import iconRandom from './race-r.png'

function RaceIcon({race, white, raceLabel, className = ''}) {
  const matcher = {
    t: iconTerran,
    p: iconProtoss,
    z: iconZerg,
    unknown: iconUnknown,
    random: iconRandom,
  }
  const icon = matcher[race] ?? matcher.unknown
  return (
    <div className={`RaceIcon style-${white ? 'white' : 'normal'} icon-${race} ${className}`}>
      <span className="icon-inner" style={{backgroundImage: `url('${icon}')`}}></span>
      <span className="icon-label">{raceLabel}</span>
    </div>
  )
}

export default RaceIcon
