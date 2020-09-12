import {
  SETUP_FETCH_ERROR,
  SETUP_LOADED,
  SETUP_LOADING,
  GET_SETUP
} from '../types'
import { GetSetup } from '../../services'

export const FetchSetup = (id) => {
  return async (dispatch) => {
    try {
      const teams = await GetSetup(id)
      dispatch(SetSetup(teams))
      dispatch(ToggleSetupLoaded(true))
      dispatch(SetupLoading(false))
    } catch (error) {
      dispatch(SetupError(true))
      dispatch(SetupLoading(false))
    }
  }
}

export const SetSetup = (payload) => ({
  type: GET_SETUP,
  payload
})

export const SetupLoading = (payload) => ({
  type: SETUP_LOADING,
  payload
})

export const ToggleSetupLoaded = () => ({
  type: SETUP_LOADED,
  payload: true
})

export const SetupError = (payload) => ({
  type: SETUP_FETCH_ERROR,
  payload
})
