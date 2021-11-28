import linkService from '../services/links'

const reducer = (state = [], action) => {
  // console.log('LINK state now: ', state)
  // console.log('LINK action', action)
  switch (action.type) {
    case 'NEW_LINK':
    //   const newState = state.concat(action.data)
      return [...state, action.data]
    case 'INIT_LINKS':
      return action.data
  }
  return state
}
// DO I REALLY NEED THIS?
export const initializeLinks = () => {
  return async dispatch => {
    const links = await linkService.getAll()
    dispatch ({
      type: 'INIT_LINKS',
      data: links
    })
  }
}

export const createLink = (linkObject) => {
  return async dispatch => {
    const newLink = await linkService.create(linkObject)
    console.log(newLink)
    dispatch ({
      type: 'NEW_LINK',
      data: newLink
    })
  }
}

export default reducer