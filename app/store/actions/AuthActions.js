import { LOGIN_FORM } from '../types'

export const HandleLoginForm = (key, value) => {
  console.log(key, value)
  return {
    type: LOGIN_FORM,
    payload: {
      key,
      value
    }
  }
}
