import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const AuthRoute = ({
  render: Component,
  children,
  isAuthenticated,
  ...rest
}) =>
  isAuthenticated ? <Route {...rest} render={Component} /> : <Redirect to="/" />
