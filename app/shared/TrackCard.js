import React from 'react'
import { Card, CardHeader, CardTitle, CardSubtitle } from 'react-md'
export const TrackCard = ({ imgSrc, title, subtitle, styles, className }) => (
  <Card className={`track-card ${className}`} style={styles}>
    <CardHeader
      beforeChildren={
        <div>
          <img src={imgSrc} alt="location flag" />
        </div>
      }
    >
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </CardHeader>
  </Card>
)
