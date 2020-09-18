const intialState = {
  profileLoading: false,
  profileLoaded: false,
  profileFetchError: false,
  favorites: [],
  authored: [],
  userProfile: {}
}
export default (state = intialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE':
      return {
        ...state,
        userProfile: action.payload.profile,
        favorites: action.payload.favorites,
        authored: action.payload.authored
      }
    case 'PROFILE_LOADING':
      return { ...state, profileLoading: action.payload }
    case 'PROFILE_LOADED':
      return { ...state, profileLoaded: action.payload }
    case 'PROFILE_FETCH_ERROR':
      return { ...state, profileFetchError: action.payload }
    default:
      return state
  }
}
