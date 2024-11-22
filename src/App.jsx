// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import SurvivorsScoreboard from './components/SurvivorsScoreboard'
import ViewportContainer from './components/ViewportContainer'
import {getScoreboardConfig} from './util/data'
import './App.css'

function App() {
  const playersPerRace = 3
  const config = getScoreboardConfig(window.location, playersPerRace)
  return (
    <div className="App">
      <ViewportContainer layoutType="BwObsLayout" useDebug={!!config.misc.debug}>
        <SurvivorsScoreboard config={config} />
      </ViewportContainer>
    </div>
  )
}

export default App
