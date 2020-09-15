import React from 'react'
import Router from './router'

export default () => {
  console.log(process.env.API_URL_DEV)
  return <Router />
}
