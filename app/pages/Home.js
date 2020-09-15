import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FetchTracks, UpdatePageWidth, SetTrack } from '../store/actions'
import { Button, Grid, Text } from 'react-md'
import { TrackCard, Loader, LazyImage } from '../shared'
import { useHistory } from 'react-router-dom'
import { Facebook } from 'react-content-loader'

const Home = ({
  dom,
  getTracks,
  trackList,
  tracksLoading,
  trackFetchError,
  tracksLoaded,
  updatePageSize,
  selectTrack
}) => {
  const navigation = useHistory()
  useEffect(() => {
    getTracks()
    function resize() {
      updatePageSize(window.innerWidth)
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('load', resize)
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('load', resize)
    }
  }, [trackList.length])

  const handleNavigate = (track) => {
    selectTrack(track)
    navigation.push(`/teams?query=gpId&value=${track.id}`)
  }

  const displayTracks = () => (
    <Grid columns={Math.floor(dom.windowWidth / 540)}>
      {trackList.map((track) => (
        <Button key={track.id} onClick={() => handleNavigate(track)}>
          <TrackCard
            className="list-item"
            styles={{ width: '540px' }}
            imgSrc={track.locationFlag}
            title={track.name}
            subtitle={track.location}
          />
        </Button>
      ))}
    </Grid>
  )
  if (trackFetchError) {
    return <div>Error</div>
  }

  switch (true) {
    case tracksLoading:
      return (
        <>
          <Loader />
          <Grid columns={3}>
            {new Array(10).fill().map((e, i) => (
              <LazyImage key={i} />
            ))}
          </Grid>
        </>
      )
    case tracksLoaded && !tracksLoading:
      return displayTracks()
    // case trackFetchError:
    default:
      return <Loader />
  }
}

const mapStateToProps = ({ Tracks, Dom }) => ({
  /**
   * Track State
   * {
   * trackList:array, tracksLoaded:boolean, tracksLoading:boolean,selectedTrack:object trackFetchError:boolean
   * }
   */
  ...Tracks,
  dom: Dom
})

const mapDispatchToProps = (dispatch) => ({
  getTracks: () => dispatch(FetchTracks()),
  updatePageSize: (size) => dispatch(UpdatePageWidth(size)),
  selectTrack: (track) => dispatch(SetTrack(track))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
