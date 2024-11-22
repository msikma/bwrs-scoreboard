// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

import './style.css'

function RaceBackground({children, isGrayedOut, className, race}) {
  return (
    <div className={`RaceBackground r-${isGrayedOut ? 'grayed-out' : race} ${className}`}>
      <div className="inner">
        {children}
      </div>
    </div>
  )
}

export default RaceBackground
