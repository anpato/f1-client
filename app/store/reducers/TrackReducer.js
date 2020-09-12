const initialState = {
  trackList: [],
  tracksLoaded: false,
  tracksLoading: false,
  selectedTrack: {},
  trackFetchError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GRAND_PRIXES':
      return { ...state, trackList: action.payload }
    case 'SELECT_GRAND_PRIX':
      return { ...state, selectedTrack: action.payload }
    case 'GRANDPRIX_LOADING':
      return { ...state, tracksLoading: action.payload }
    case 'GRANDPRIX_LOADED':
      return { ...state, tracksLoaded: action.payload }
    case 'GRANDPRIX_ERROR':
      return { ...state, trackFetchError: action.payload, tracksLoaded: false }
    default:
      return state
  }
}
