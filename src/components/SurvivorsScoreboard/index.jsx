// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import {useState} from 'react'
import RaceGroup from '../RaceGroup'
import ScoreboardBanner from '../ScoreboardBanner'
import ScoreboardEditor from '../ScoreboardEditor'
import './style.css'

function SurvivorsScoreboard({config, bannerState, playerState}) {
  const {players, misc} = config
  const races = ['t', 'p', 'z']
  
  return (
    <div className="SurvivorsScoreboard">
      <ScoreboardBanner bannerState={bannerState} />
      <div className="race-groups">
        {races.map(race => <RaceGroup race={race} key={race} players={players[race]} playerState={playerState.state} callbacks={playerState.callbacks} />)}
      </div>
    </div>
  )
}

export default SurvivorsScoreboard
