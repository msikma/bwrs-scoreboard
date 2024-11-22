// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import './style.css'

function ScoreboardBanner({bannerState}) {
  const text = bannerState.state.trim()
  return (
    <>{text ? <div className="ScoreboardBanner">
        {bannerState.state}
      </div> : null}</>
  )
}

export default ScoreboardBanner
