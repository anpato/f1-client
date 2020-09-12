const intialState = {
  teams: [],
  teamsLoaded: false,
  teamsLoading: false,
  teamFetchError: false,
  selectedTeam: {}
}
export default (state = intialState, action) => {
  switch (action.type) {
    case 'GET_TEAMS':
      return {
        ...state,
        teams: action.payload
      }
    case 'SELECT_TEAM':
      return { ...state, selectedTeam: action.payload }
    case 'TEAMS_LOADING':
      return { ...state, teamsLoading: action.payload }
    case 'TEAMS_LOADED':
      return { ...state, teamsLoaded: action.payload }
    case 'TEAM_ERROR':
      return { ...state, teamFetchError: action.payload, teamsLoaded: false }
    default:
      return state
  }
}
