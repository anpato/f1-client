import {
  PROFILE_LOADED,
  PROFILE_LOADING,
  GET_PROFILE,
  FAVORITE_SETUP,
  FAVORITE_FAILED
} from '../types'
import { FavoriteSetup, GetUserProfile } from '../../services'
export const GetProfile = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(ToggleProfileLoading(true))
      const data = await GetUserProfile(userId)
      dispatch(SetProfile(data))
      dispatch(ToggleProfileLoading(false))
      dispatch(ToggleProfileLoaded(true))
    } catch (error) {
      dispatch(ToggleProfileLoading(false))
      dispatch(ToggleProfileError(true))
    }
  }
}

export const SaveFavorite = (setupId, userId) => async (dispatch) => {
  try {
    console.log(setupId, userId)
    const res = await FavoriteSetup(userId, setupId)
    if (res.status === 200) {
      dispatch(InsertFavorite(res.data))
    }
  } catch (error) {
    dispatch(ToggleFailedFavorite(true))
  }
}

const ToggleFailedFavorite = (payload) => ({
  type: FAVORITE_FAILED,
  payload
})

const InsertFavorite = (payload) => ({
  type: FAVORITE_SETUP,
  payload
})

const SetProfile = (object) => ({
  type: GET_PROFILE,
  payload: object
})

const ToggleProfileLoading = (boolean) => ({
  type: PROFILE_LOADING,
  payload: boolean
})

const ToggleProfileLoaded = (boolean) => ({
  type: PROFILE_LOADED,
  payload: boolean
})

const ToggleProfileError = (boolean) => ({
  type: PROFILE_FETCH_ERROR,
  payload: boolean
})
