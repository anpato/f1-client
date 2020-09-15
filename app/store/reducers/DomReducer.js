const initialState = {
  windowWidth: 0,
  modalOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WINDOW_WIDTH':
      return {
        ...state,
        windowWidth: action.payload
      }
    case 'TOGGLE_MODAL':
      return { ...state, modalOpen: action.payload }
    default:
      return state
  }
}
