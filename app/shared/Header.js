import React from 'react'
import { Divider } from 'react-md'

export const Header = ({ title, action, children }) => (
  <div className="header">
    <div className="action-wrapper">
      {title} {action}
    </div>
    <Divider />
    {children}
  </div>
)
