const intialState = {
  profileLoading: false,
  profileLoaded: false,
  profileFetchError: false,
  favoriteFailed: false,
  favorites: [],
  authored: [],
  userProfile: {}
}
export default (state = intialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE':
      return {
        ...state,
        userProfile: action.payload.user,
        favorites: action.payload.favorites,
        authored: action.payload.authored
      }
    case 'PROFILE_LOADING':
      return { ...state, profileLoading: action.payload }
    case 'PROFILE_LOADED':
      return { ...state, profileLoaded: action.payload }
    case 'PROFILE_FETCH_ERROR':
      return { ...state, profileFetchError: action.payload }
    case 'FAVORITE_SETUP':
      return { ...state, favorites: [...state.favorites, action.payload] }
    case 'FAVORITE_FAILED':
      return { ...state, favoriteFailed: action.payload }
    default:
      return state
  }
}
