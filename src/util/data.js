// bwrs-scoreboard <https://github.com/msikma/bwrs-scoreboard>
// © MIT License

/**
 * Extracts the configuration from the URL.
 */
export function getScoreboardConfig(location, playersPerRace = 3) {
  // URL parameters provided by the user.
  const params = new URL(location).searchParams

  // Errors found in the configuration.
  const errors = []

  // Parsed players.
  const players = {
    t: [],
    p: [],
    z: [],
  }
  
  for (let n = 1; n <= (3 * playersPerRace); ++n) {
    const p = `p${n}`
    const r = `r${n}`
    const pValue = params.get(p) ?? '(no name)'
    const rValue = params.get(r)

    // Name, but no race specified.
    if (pValue && rValue === null) {
      errors.push([n, `no race specified`])
    }

    if (rValue === null) {
      continue
    }
    
    players[rValue.toLowerCase()].push({
      name: pValue,
      race: rValue,
      id: `${rValue}-${pValue}`,
    })
  }

  return {
    players,
    errors,
    misc: {
      playersPerRace,
      debug: Number(params.get('debug')) === 1,
    }
  }
}
