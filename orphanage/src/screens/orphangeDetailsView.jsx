import React from 'react'

const OrphanageDetailsView = ({match}) => {
  return (
    <>
      <h1>{match.params.id}</h1>
    </>
  )
}

export default OrphanageDetailsView
