const initialState = {
  setup: {},
  setupLoading: false,
  setupLoaded: false,
  setupFetchError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SETUP':
      return { ...state, setup: action.payload }
    case 'SETUP_LOADING':
      return { ...state, setupLoading: action.payload }
    case 'SETUP_LOADED':
      return { ...state, setupLoaded: action.payload }
    case 'SETUP_FETCH_ERROR':
      return { ...state, setupFetchError: action.payload, setupLoaded: false }
    default:
      return state
  }
}
