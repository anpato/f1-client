import { PROFILE_LOADED, PROFILE_LOADING } from '../types'

export const GetProfile = (userId) => {
  return async (disptach) => {
    try {
    } catch (error) {}
  }
}

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
