import React from 'react'
import ContentLoader from 'react-content-loader'
import { Card, CardContent } from 'react-md'

export const LazyImage = ({ props }) => {
  return (
    <Card style={{ width: '540px' }}>
      <CardContent>
        <ContentLoader
          speed={2}
          width={520}
          height={200}
          viewBox="0 0 476 124"
          backgroundColor="#f3f3f3"
          foregroundColor="#a1a1a1"
          {...props}
        >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
          <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
          <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
          <circle cx="20" cy="20" r="20" />
        </ContentLoader>
      </CardContent>
    </Card>
  )
}
