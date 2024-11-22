import {useState} from 'react'

export function createBannerState() {
  const [state, setState] = useState('')

  return {
    state,
    setState,
  }
}
