import React from 'react'
import { Button, TextIconSpacing } from 'react-md'

export const ActionButton = ({ onClick, buttonText, icon, ...rest }) => (
  <Button onClick={onClick} {...rest}>
    <TextIconSpacing icon={icon} iconAfter>
      {buttonText}
    </TextIconSpacing>
  </Button>
)
