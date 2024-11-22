import {useState} from 'react'

export function createPlayersState(players) {
  // Generate "isEliminated" state for all players by ID.
  const allPlayers = [...Object.values(players)].flat()
  const initialState = Object.fromEntries(allPlayers.map(player => player.id).map(id => [id, {isEliminated: false}]))
  const [state, setState] = useState(initialState)

  const eliminatePlayer = (id, eliminationState = true) => {
    const newState = {...state}
    newState[id].isEliminated = eliminationState
    setState({...state, ...newState})
  }

  return {
    state,
    setState,
    callbacks: {eliminatePlayer},
  }
}
