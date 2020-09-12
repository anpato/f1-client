import Client from '../config'

export const GetTeams = async () => {
  try {
    const res = await Client.get('/teams')
    return res.data
  } catch (error) {
    return error
  }
}
