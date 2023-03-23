import React, { createContext, useState } from 'react'

export const LoaderContext = createContext()

export function LoaderProvider ({ children }) {
  const [loaderPodcastActive, setLoaderPodcastActive] = useState(false)
  const [loaderEpisodesActive, setLoaderEpisodesActive] = useState(false)

  return (
      <LoaderContext.Provider value={{ loaderPodcastActive, loaderEpisodesActive, setLoaderPodcastActive, setLoaderEpisodesActive }}>
        {children}
      </LoaderContext.Provider>
  )
}
