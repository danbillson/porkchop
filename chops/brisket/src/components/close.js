import React from 'react'

export default props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
    style={{ marginLeft: 'auto' }}
    className="close"
    {...props}
  >
    <title>ionicons-v5-m</title>
    <path
      d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
      style={{
        fill: 'none',
        stroke: '#d4415e',
        strokeMiterlimit: 10,
        strokeWidth: 32
      }}
    />
    <line
      x1="320"
      y1="320"
      x2="192"
      y2="192"
      style={{
        fill: 'none',
        stroke: '#d4415e',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 32
      }}
    />
    <line
      x1="192"
      y1="320"
      x2="320"
      y2="192"
      style={{
        fill: 'none',
        stroke: '#d4415e',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 32
      }}
    />
  </svg>
)
