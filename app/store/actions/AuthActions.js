import { LOGIN_FORM } from '../types'

export const HandleLoginForm = (key, value) => ({
  type: LOGIN_FORM,
  payload: {
    key,
    value
  }
})
