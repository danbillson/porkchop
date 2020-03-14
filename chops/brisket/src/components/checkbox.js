import React from 'react'

export default ({ completed, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
    style={{ marginRight: '0.5rem' }}
    {...props}
  >
    <title>ionicons-v5-l</title>
    <polyline
      hidden={!completed}
      points="352 176 217.6 336 160 272"
      style={{
        fill: 'none',
        stroke: '#91bd2c',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 32
      }}
    />
    <rect
      x="64"
      y="64"
      width="384"
      height="384"
      rx="48"
      ry="48"
      style={{
        fill: 'none',
        stroke: '#000',
        strokeLinejoin: 'round',
        strokeWidth: 32
      }}
    />
  </svg>
)
