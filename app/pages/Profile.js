import React from 'react'
import { connect } from 'react-redux'
import { GetProfile } from '../store/actions'

const Profile = () => {
  return <div></div>
}

const mapStateToProps = ({ Profile }) => ({
  profile: { ...Profile }
})
const mapDispatchToProps = (dispatch) => ({
  getProfile: (userId) => dispatch(GetProfile(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
