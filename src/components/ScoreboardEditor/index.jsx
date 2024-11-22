// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import './style.css'

function ScoreboardEditor({bannerState}) {
  return (
    <div className="ScoreboardEditor">
      <input name="banner" type="text" value={bannerState.state} placeholder="Banner text" onChange={e => bannerState.setState(e.target.value)} />
    </div>
  )
}

export default ScoreboardEditor
