import { GetTracks } from '../../services/GrandPrixServices'
import {
  GET_GRANDPRIXS,
  GRANDPRIX_ERROR,
  GRANDPRIX_LOADED,
  GRANDPRIX_LOADING,
  SELECT_GRAND_PRIX
} from '../types'

export const FetchTracks = () => {
  return async (dispatch) => {
    try {
      dispatch(TrackListLoading(true))
      const tracks = await GetTracks()
      dispatch(AddTracks(tracks))
      dispatch(ToggleTracksLoaded(true))
      dispatch(TrackListLoading(false))
    } catch (error) {
      dispatch(TrackError(true))
      dispatch(TrackListLoading(false))
    }
  }
}

export const SetTrack = (payload) => ({
  type: SELECT_GRAND_PRIX,
  payload
})

export const TrackListLoading = (payload) => ({
  type: GRANDPRIX_LOADING,
  payload
})

export const ToggleTracksLoaded = () => ({
  type: GRANDPRIX_LOADED,
  payload: true
})

export const AddTracks = (payload) => ({
  type: GET_GRANDPRIXS,
  payload
})

export const TrackError = (payload) => ({
  type: GRANDPRIX_ERROR,
  payload
})
