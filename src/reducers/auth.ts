import {
  LOGIN
} from '../constants/actionTypes'

const reducer = (state = {}, action: Action) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN: {
      return state
    }
    default:
      return state
  }
}

export default reducer