import { PROFILE_LOADED, PROFILE_LOADING, GET_PROFILE } from '../types'
import { GetUserProfile } from '../../services'
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

export const SetProfile = (object) => ({
  type: GET_PROFILE,
  payload: object
})

export const ToggleProfileLoading = (boolean) => ({
  type: PROFILE_LOADING,
  payload: boolean
})

export const ToggleProfileLoaded = (boolean) => ({
  type: PROFILE_LOADED,
  payload: action.payload
})

export const ToggleProfileError = (boolean) => ({
  type: PROFILE_FETCH_ERROR,
  payload: boolean
})
