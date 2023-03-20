import React from 'react'
import { useParams } from 'react-router-dom'

export function EpisodeDetail () {
  const { podcastId, episodeId } = useParams()
  return (
        <>
            <h2>Este es el episodio {episodeId}  del podcast {podcastId}</h2>
        </>
  )
}
