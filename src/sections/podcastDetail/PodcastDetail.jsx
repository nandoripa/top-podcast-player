import React from 'react'
import { useParams } from 'react-router-dom'

export function PodcastDetail () {
  const { podcastId } = useParams()
  return (
        <>
            <h2>Este es el podscat {podcastId}</h2>
        </>
  )
}
