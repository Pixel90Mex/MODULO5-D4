import React from 'react'
import { StarFill } from 'react-bootstrap-icons'

const MyRatingSystem = ({ stars }) => {
  return (
    <>
      {
        [...Array(stars)].map((star, index) => {
          return <StarFill key={index} />
        })
      }
    </>
  )
}

export default MyRatingSystem