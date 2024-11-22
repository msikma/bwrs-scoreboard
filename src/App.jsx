// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import SurvivorsScoreboard from './components/SurvivorsScoreboard'
import ViewportContainer from './components/ViewportContainer'
import ScoreboardEditor from './components/ScoreboardEditor'
import {getScoreboardConfig} from './util/data'
import {createPlayersState} from './state/players'
import {createBannerState} from './state/banner'
import './App.css'

function App() {
  const playersPerRace = 3
  const config = getScoreboardConfig(window.location, playersPerRace)
  const playerState = createPlayersState(config.players)
  const bannerState = createBannerState()
  return (
    <div className="App">
      <ViewportContainer layoutType="BwObsLayout" useDebug={!!config.misc.debug}>
        <ScoreboardEditor bannerState={bannerState} />
        <SurvivorsScoreboard config={config} playerState={playerState} bannerState={bannerState} />
      </ViewportContainer>
    </div>
  )
}

export default App
