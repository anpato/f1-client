import React from 'react'
import { LinearProgress, CircularProgress } from 'react-md'
export const Loader = ({ type }) =>
  type === 'circle' ? (
    <CircularProgress id="main-loader" />
  ) : (
    <LinearProgress id="main-loader" />
  )
