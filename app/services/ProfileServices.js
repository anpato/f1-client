import Client from '../config'

export const GetUserProfile = async (userId) => {
  try {
    const res = await Client.get(`/profile/view/details?user=${userId}`)
    const { favorites, authored_setups } = res.data
    delete res.data.favorites
    delete res.data.authored_setups
    return {
      user: res.data,
      favorites,
      authored: authored_setups
    }
  } catch (error) {
    throw error
  }
}

export const FavoriteSetup = async (userId, setupId) => {
  try {
    const res = await Client.post(
      `/profile/favorites/add?user=${userId}&setup=${setupId}`
    )
    return res.status
  } catch (error) {
    throw error
  }
}

export const RemoveFavorite = async (userId, setupId) => {
  try {
    const res = await Client.delete(
      `/profile/delete?user=${userId}&setup=${setupId}`
    )
    return res.status
  } catch (error) {
    throw error
  }
}

export const ViewFavorites = (userId) => {}
