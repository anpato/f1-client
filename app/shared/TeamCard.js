import React from 'react'
import {
  Card,
  MediaContainer,
  CardTitle,
  Grid,
  WbCloudyFontIcon,
  WbSunnyFontIcon,
  CardSubtitle
} from 'react-md'

export const TeamCard = ({
  title,
  imgSrc,
  logo,
  teamColor,
  lapTime,
  raceMode,
  conditions,
  className
}) => (
  <Card className={className}>
    <Grid columns={2}>
      <MediaContainer>
        <img src={imgSrc} alt="team-car" />
      </MediaContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: '1em'
        }}
      >
        <CardTitle style={{ display: 'flex' }}>
          <div
            style={{
              width: '10px',
              height: '40px',
              marginRight: '1em',
              backgroundColor: teamColor || '#000'
            }}
          ></div>
          {title}
        </CardTitle>
      </div>
    </Grid>
    <Grid columns={3}>
      <CardSubtitle className="card-data">{raceMode}</CardSubtitle>
      <CardSubtitle className="card-data">{lapTime || '0.0.00'}</CardSubtitle>
      <CardSubtitle className="card-data">
        {conditions && conditions === 'wet' ? (
          <WbCloudyFontIcon className="card-data" />
        ) : (
          <WbSunnyFontIcon className="card-data" />
        )}
      </CardSubtitle>
    </Grid>
  </Card>
)
