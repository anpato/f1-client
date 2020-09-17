import { SignIn } from '../../services'
import {
  FORM_ERROR,
  LOGIN_FORM,
  SIGN_IN_LOADING,
  LOG_IN_SUCCESS,
  SET_USER,
  RESET_FORM
} from '../types'

export const SignInUser = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(ToggleLoginLoading(true))
      const user = await SignIn(formData)
      dispatch(SetUser(user))
      dispatch(ToggleLoginLoading(false))
      dispatch(ToggleLoginSuccess(true))
    } catch (error) {
      dispatch(ToggleLoginLoading(false))
      dispatch(ToggleLoginError(true))
      dispatch(ResetForm('loginForm', 'password'))
    }
  }
}

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
