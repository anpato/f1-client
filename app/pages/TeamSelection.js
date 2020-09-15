import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FetchTeams, SetTeam } from '../store/actions'
import { Grid, Button, Text } from 'react-md'
import { TrackCard, TeamCard, Loader, LazyImage } from '../shared'
import slugify from 'slugify'
const TeamSelection = ({
  getTeams,
  selectedTrack,
  teams,
  teamsLoaded,
  teamFetchError,
  teamsLoading,
  selectTeam,
  history
}) => {
  useEffect(() => {
    const {
      location: { search }
    } = history
    getTeams(search.replace('?', ''))
  }, [])
  const handleNavigate = (team) => {
    selectTeam(team.Team)
    history.push(
      `/setups?trackId=${selectedTrack.id}&team=${slugify(team.Team.teamName, {
        replaceMent: '-',
        lower: true
      })}&setup_id=${team.id}`
    )
  }
  const DisplayTeams = () => (
    <Grid columns={2}>
      {teams.map((team) => (
        <Button key={team.id} onClick={() => handleNavigate(team)}>
          <TeamCard
            className="list-item"
            imgSrc={team.Team.teamCar}
            title={team.Team.teamName}
            logo={team.Team.teamLogo}
            teamColor={team.Team.teamColor}
            lapTime={team.lapTime}
            raceMode={team.raceMode}
            conditions={team.conditions}
          />
        </Button>
      ))}
    </Grid>
  )
  switch (true) {
    case teams && teamsLoaded:
      return (
        <Grid columns={1}>
          <TrackCard
            imgSrc={selectedTrack.locationFlag}
            title={selectedTrack.name}
            subtitle={selectedTrack.location}
          />
          {DisplayTeams()}
        </Grid>
      )
    case teamsLoading:
      return (
        <>
          <Loader />
          <TrackCard
            imgSrc={selectedTrack.locationFlag}
            title={selectedTrack.name}
            subtitle={selectedTrack.location}
          />
          <Grid columns={2}>
            {new Array(3).fill().map((e, i) => (
              <LazyImage key={i} />
            ))}
          </Grid>
        </>
      )
    default:
      return (
        <>
          <Loader />
          <TrackCard
            imgSrc={selectedTrack.locationFlag}
            title={selectedTrack.name}
            subtitle={selectedTrack.location}
          />
          <div>
            <Text>No Setups Available</Text>
          </div>
        </>
      )
  }
}

const mapStateToProps = ({ Teams, Tracks: { selectedTrack } }) => ({
  ...Teams,
  selectedTrack
})
const mapDispatchToProps = (dispatch) => ({
  getTeams: (qs) => dispatch(FetchTeams(qs)),
  selectTeam: (team) => dispatch(SetTeam(team))
})
export default connect(mapStateToProps, mapDispatchToProps)(TeamSelection)
