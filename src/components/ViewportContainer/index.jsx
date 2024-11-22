// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import ViewportDebug from '../ViewportDebug'
import './style.css'

function ViewportContainer({children, useDebug, layoutType}) {
  return (
    <div className={`ViewportContainer`}>
      {useDebug ? <ViewportDebug useDebug={true} /> : null}
      <div className={layoutType}>
        {children}
      </div>
    </div>
  )
}

export default ViewportContainer
