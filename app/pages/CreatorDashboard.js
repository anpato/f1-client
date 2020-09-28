import React from 'react'
import {
  Button,
  ChevronRightSVGIcon,
  Grid,
  TextIconSpacing,
  Text,
  CircularProgress,
  Divider
} from 'react-md'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { ActionButton, Header } from '../shared'

const mapDispatchToProps = (dispatch) => ({})
const mapStateToProps = ({ Auth, Profile }) => ({
  currentUser: Profile.userProfile,
  favorites: Profile.favorites,
  authored: Profile.authored,
  profileLoaded: Profile.profileLoaded,
  profileError: Profile.profileFetchError
})

const CreatorDashboard = ({
  currentUser,
  authored,
  favorites,
  profileLoaded,
  profileFetchError
}) => {
  const sectionOptions = () => {
    let headers = ['Your Favorites', 'Your Setups']

    const mapActionToHeader = (header) => {
      switch (header) {
        case 'your favorites':
          return {
            action: () => console.log('Goes To Favorites'),
            disableAction: favorites.length ? false : true,
            placeholder: (
              <div className="profile-section-data">
                <Text>You haven't added any favorites yet.</Text>
              </div>
            ),
            data: favorites
          }
        case 'your setups':
          return {
            action: () => console.log('Goes to authored'),
            disableAction: authored.length ? false : true,
            placeholder: (
              <div className="profile-section-data">
                <Text>You haven't created any setups yet.</Text>
                <Button
                  themeType="contained"
                  theme="primary"
                  onClick={() => console.log('Create Setup')}
                >
                  Create A Setup
                </Button>
              </div>
            ),
            data: authored
          }
        default:
          return {
            action: () => {},
            disableAction: false,
            placeholder: <CircularProgress id={`${header}-loading`} />,
            data: []
          }
      }
    }

    return headers.map((h, i) => {
      const { action, disableAction, placeholder, data } = mapActionToHeader(
        h.toLowerCase()
      )
      console.log(placeholder)
      return (
        <Header
          key={i}
          title={<Text className="profile-section-header">{h}</Text>}
          action={
            <ActionButton
              buttonText="View All"
              icon={<ChevronRightSVGIcon />}
              disabled={disableAction}
              onClick={action}
            />
          }
        >
          {disableAction ? (
            placeholder
          ) : (
            <Grid>
              {data.map((d) => (
                <div>{d.id}</div>
              ))}
            </Grid>
          )}
        </Header>
      )
    })
  }
  if (profileFetchError) {
    return <Redirect to="/" />
  }
  return <Grid columns={1}>{profileLoaded ? sectionOptions() : null}</Grid>
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatorDashboard)
