const initialState = {
  windowWidth: 1920
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WINDOW_WIDTH':
      return {
        ...state,
        windowWidth: action.payload
      }
    default:
      return state
  }
}
