import React from 'react'
import { LinearProgress, CircularProgress } from 'react-md'
export const Loader = ({ type }) =>
  type === 'circle' ? (
    <CircularProgress id="main-loader" color="#eee" />
  ) : (
    <LinearProgress id="main-loader" />
  )
