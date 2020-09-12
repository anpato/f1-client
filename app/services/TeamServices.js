import Client from '../config'

export const GetTeams = async () => {
  try {
    const res = await Client.get('/teams')
    return res.data
  } catch (error) {
    return error
  }
}

export const GetSetup = async (setupId) => {
  try {
    const res = await Client.get(`/setups/view/${setupId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
