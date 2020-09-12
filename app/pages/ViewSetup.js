import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FetchSetup } from '../store/actions'
import decamilize from 'decamelize'
import { Loader, TeamCard, TrackCard } from '../shared'
import {
  Grid,
  CardHeader,
  Card,
  Divider,
  CardTitle,
  CardSubtitle
} from 'react-md'
const ViewSetup = ({ getSetup, selectedTeam, setup, history, track }) => {
  useEffect(() => {
    const {
      location: { search }
    } = history
    let qs = search.split('=')
    getSetup(qs[qs.length - 1])
  }, [])

  const checkKeys = (k, value) => {
    switch (k) {
      case 'createdAt':
        return new Date(value).toLocaleDateString()
      case 'conditions':
        return value.charAt(0).toUpperCase() + value.slice(1)
      default:
        return value
    }
  }

  const createSectionData = (values) => {
    let table = {
      wing: {
        header: 'Aero',
        data: []
      },
      differential: {
        header: 'Differentials',
        data: []
      },
      suspension: {
        header: 'Suspension',
        data: []
      },
      brake: {
        header: 'Brakes',
        data: []
      },
      tyre: {
        header: 'Tyres',
        data: []
      }
    }
    values.forEach((v) => {
      let key = v.originalKey.toLowerCase()
      Object.keys(table).forEach((k) => {
        if (key.includes(k)) {
          table[k].data.push(v)
        }
      })
      if (
        key.includes('camber') ||
        key.includes('toe') ||
        key.includes('roll')
      ) {
        table.suspension.data.push(v)
      }
    })
    return Object.values(table)
  }

  const mapValuesToObject = () => {
    let values = []
    let RaceInfo = []
    let date = ''
    let setupData = setup.setup
    for (const key in setupData) {
      if (setupData.hasOwnProperty(key)) {
        const value = setupData[key]
        if (key !== 'id') {
          let formattedKey = decamilize(key, '_')
          let label = []
          formattedKey.split('_').forEach((str) => {
            label.push(str.charAt(0).toUpperCase() + str.slice(1))
          })

          switch (true) {
            case key === 'lapTime' ||
              key === 'conditions' ||
              key === 'raceMode':
              RaceInfo.push({
                originalKey: key,
                label: label.join(' '),
                value: checkKeys(key, value)
              })
              break
            case key === 'createdAt':
              date = new Date(value)
              break
            default:
              values.push({
                originalKey: key,
                label: label.join(' '),
                value: checkKeys(key, value)
              })
          }
        }
      }
    }
    const pageData = createSectionData(values)
    return { pageData, RaceInfo }
  }

  const displaySetupData = (pageData) => {
    return pageData.map((v) => (
      <div>
        <h1 style={{ fontSize: '1.3rem', padding: '1em' }}>{v.header}</h1>
        <Divider />
        <Grid columns={2}>
          {v.data.map((d) => (
            <Card>
              <CardHeader>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                  }}
                >
                  <CardTitle>{d.label}</CardTitle>
                  <CardTitle className="red">{d.value}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </Grid>
      </div>
    ))
  }

  switch (true) {
    case setup.setupLoaded:
      const { pageData, RaceInfo } = mapValuesToObject()
      return (
        <Grid columns={1} style={{ width: '90%', margin: 'auto' }}>
          <Grid columns={2} style={{ margin: 'auto' }}>
            <TeamCard
              title={selectedTeam.teamName}
              imgSrc={selectedTeam.teamCar}
              teamColor={selectedTeam.teamColor}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
                  padding: '1em'
                }}
              >
                {RaceInfo.map((info) => (
                  <div style={{ textAlign: 'center' }}>
                    <CardSubtitle className="card-data">
                      {info.label}
                    </CardSubtitle>
                    <CardSubtitle className="card-data stat">
                      {info.value}
                    </CardSubtitle>
                  </div>
                ))}
              </div>
            </TeamCard>
            <TrackCard
              styles={{ width: '100%' }}
              title={track.name}
              imgSrc={track.locationFlag}
              subtitle={track.location}
            />
          </Grid>
          {displaySetupData(pageData)}
        </Grid>
      )
    case setup.setupLoading:
      return <Loader type="circular" />
    default:
      return <div></div>
  }
}
const mapStateToProps = ({ Teams, Setup, Tracks }) => ({
  selectedTeam: Teams.selectedTeam,
  setup: Setup,
  track: Tracks.selectedTrack
})

const mapDisptachToProps = (dispatch) => ({
  getSetup: (id) => dispatch(FetchSetup(id))
})
export default connect(mapStateToProps, mapDisptachToProps)(ViewSetup)
