let timer

const reducer = (state = '', action) => {
    // console.log('NOTIF state now: ', state)
    // console.log('NOTIF action', action)
    switch (action.type) {
      case 'NEW_LINK2':
        // return [...state, action.data]
        return state = action.data.notification
      default: return state
    }
  }
  
  export const addNotification = (notification, timeout) => {
    return async dispatch => {
      dispatch ({
        type: 'NEW_LINK2', // cannot use 'VOTE_NOTE' same as anecdoteReducer
        data: { notification }
      })
      // clearTimeout(timer)
      timer = setTimeout(() => dispatch({
        type: 'NEW_LINK2',
        data: { notification: '' }
      }), timeout * 5000)     
    }
      
    }

export default reducer