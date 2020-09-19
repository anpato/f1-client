import Client from '../config'
import { SetToken } from '../utils'

export const SignIn = async (formData) => {
  try {
    const res = await Client.post('/auth/login', formData)
    SetToken('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const Register = async (formData) => {
  try {
    const res = await Client.post('/auth/register', formData)
    console.log(res)
  } catch (error) {
    throw error
  }
}

export const CheckTokenValid = async () => {
  try {
    const res = await Client.post('/auth/token/validate')
    let user = { displayName: res.data.user.displayName, id: res.data.user.id }
    return { status: res.status, user }
  } catch (error) {
    throw error
  }
}
