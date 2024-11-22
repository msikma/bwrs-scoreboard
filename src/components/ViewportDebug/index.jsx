// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import debugBackground from './debug-background.jpg'
import './style.css'

function ViewportDebug({}) {
  return (
    <div className="ViewportDebug">
      <img src={debugBackground} width="3840" height="2160" className="debug-bg-img" />
    </div>
  )
}

export default ViewportDebug
