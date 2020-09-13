const initialState = {
  authenticated: false,
  logInError: false,
  currentUser: {},
  loginForm: {
    email: '',
    password: ''
  }
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'LOG_IN_ERROR':
      return {
        ...state,
        logInError: true
      }
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        authenticated: true
      }
    default:
      return state
  }
}
