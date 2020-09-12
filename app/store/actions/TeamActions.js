import { GetTeams } from '../../services'
import {
  GET_TEAMS,
  TEAMS_LOADING,
  TEAMS_LOADED,
  SELECT_TEAM,
  TEAM_ERROR
} from '../types'
import { GetAvailableSetups } from '../../services/GrandPrixServices'

export const FetchTeams = (query, value) => {
  return async (dispatch) => {
    try {
      const teams = await GetAvailableSetups(query, value)
      dispatch(AddTeams(teams))
      dispatch(ToggleTeamsLoaded(true))
      dispatch(TeamListLoading(false))
    } catch (error) {
      dispatch(TeamError(true))
      dispatch(TeamListLoading(false))
    }
  }
}

export const AddTeams = (payload) => ({
  type: GET_TEAMS,
  payload
})

export const SetTeam = (payload) => ({
  type: SELECT_TEAM,
  payload
})

export const TeamListLoading = (payload) => ({
  type: TEAMS_LOADING,
  payload
})

export const ToggleTeamsLoaded = () => ({
  type: TEAMS_LOADED,
  payload: true
})

export const TeamError = (payload) => ({
  type: TEAM_ERROR,
  payload
})
