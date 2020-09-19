import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Router from './router'
import { VerifyToken } from './store/actions'
import { GetToken } from './utils'

const mapDispatchToProps = (dispatch) => ({
  verifyToken: (done) => dispatch(VerifyToken(done))
})

export default connect(
  null,
  mapDispatchToProps
)(({ verifyToken }) => {
  const history = useHistory()
  useEffect(() => {
    if (GetToken('token')) {
      const navigate = () => history.push('/profile?authenticated=true')
      verifyToken(navigate)
    }
  }, [])
  return <Router />
})
