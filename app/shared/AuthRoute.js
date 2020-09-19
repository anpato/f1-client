import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const mapStateToProps = ({ Auth }) => ({
  isAuthenticated: Auth.authenticated
})

export const AuthRoute = connect(
  mapStateToProps
)(({ render: Component, children, isAuthenticated, ...rest }) =>
  isAuthenticated ? <Route {...rest} render={Component} /> : <Redirect to="/" />
)
