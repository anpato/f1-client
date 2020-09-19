import { CheckTokenValid, SignIn } from '../../services'
import {
  FORM_ERROR,
  LOGIN_FORM,
  SIGN_IN_LOADING,
  LOG_IN_SUCCESS,
  SET_USER,
  RESET_FORM,
  AUTHENTICATE
} from '../types'
import { ToggleModal } from './DomActions'

export const SignInUser = (formData, done) => {
  return async (dispatch) => {
    try {
      dispatch(ToggleLoginLoading(true))
      const user = await SignIn(formData)
      dispatch(SetUser(user))
      dispatch(ToggleLoginLoading(false))
      dispatch(ToggleLoginSuccess(true))
      dispatch(Authenticate(true))
      dispatch(ToggleModal(false))
      done()
    } catch (error) {
      dispatch(ToggleLoginLoading(false))
      dispatch(ToggleLoginError(true))
      dispatch(ResetForm('loginForm', 'password'))
    }
  }
}

export const VerifyToken = (done) => {
  return async (dispatch) => {
    try {
      const res = await CheckTokenValid()
      if (res.status === 200) {
        dispatch(Authenticate(true))
        dispatch(SetUser(res.user))
        return done()
      }
      return dispatch(Authenticate(false))
    } catch (error) {
      throw error
    }
  }
}

export const Authenticate = (boolean) => ({
  type: AUTHENTICATE,
  payload: boolean
})

export const HandleLoginForm = (key, value) => ({
  type: LOGIN_FORM,
  payload: {
    key,
    value
  }
})

export const ResetForm = (form, value) => ({
  type: RESET_FORM,
  payload: {
    form,
    value
  }
})

export const ToggleLoginSuccess = (boolean) => ({
  type: LOG_IN_SUCCESS,
  payload: boolean
})

export const SetUser = (user) => ({
  type: SET_USER,
  payload: user
})

export const ToggleLoginLoading = (boolean) => ({
  type: SIGN_IN_LOADING,
  payload: boolean
})

export const ToggleLoginError = (boolean) => ({
  type: FORM_ERROR,
  payload: boolean
})
