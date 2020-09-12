import Client from '../config'

export const GetTracks = async () => {
  try {
    const res = await Client.get('/tracks')
    return res.data
  } catch (error) {
    throw error
  }
}

export const SelectTrack = async (trackId) => {
  try {
    const res = await Client.get(`/tracks/details/${trackId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAvailableSetups = async (qs) => {
  try {
    const res = await Client.get(`/tracks/setups?${qs}`)
    return res.data
  } catch (error) {
    throw error
  }
}
