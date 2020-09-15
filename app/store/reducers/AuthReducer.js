const initialState = {
  authenticated: false,
  formError: false,
  formSubmit: false,
  signInLoading: false,
  currentUser: {},
  loginForm: {
    email: '',
    password: ''
  },
  registerForm: {}
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'Form_ERROR':
      return {
        ...state,
        formError: action.payload
      }
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        authenticated: action.payload
      }
    case 'LOGIN_FORM':
      const { key, value } = action.payload
      return {
        ...state,
        loginForm: { ...state.loginForm, [key]: value }
      }
    case 'SIGN_IN_LOADING':
      return { ...state, signInLoading: action.payload }
    case 'AUTH_FORM_SUBMIT':
      return { ...state, formSubmit: action.payload }
    case 'REGISTER_FORM':
      const { key, value } = action.payload
      return {
        ...state,
        registerForm: { ...state.registerForm, [key]: value }
      }
    default:
      return state
  }
}
