import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { useLoader } from './useLoader'

export function usePodcastRepository ({ repository, filter, podcastId }) {
  const [repositoryData, setRepositoryData] = useState([])
  const { setLoaderPodcastActive } = useLoader()
  const [topPodcastsLocalStorage, setTopPodcastLocalStorage] = useLocalStorage('topPodcasts', undefined)
  const previousFilter = useRef(filter)

  const filterPodcasts = useCallback((filter) => {
    if (filter === previousFilter.current) return

    setLoaderPodcastActive(true)
    if (filter === '') {
      setRepositoryData(topPodcastsLocalStorage)
    } else {
      previousFilter.current = filter
      const filteredPodcasts = repository.filter(topPodcastsLocalStorage, filter)
      setRepositoryData(filteredPodcasts)
    }
    setLoaderPodcastActive(false)
  }, [])

  useEffect(() => {
    setLoaderPodcastActive(true)

    if (topPodcastsLocalStorage) {
      const podcasts = podcastId ? repository.getPodcastById(topPodcastsLocalStorage, podcastId) : topPodcastsLocalStorage
      setRepositoryData(podcasts)
      setLoaderPodcastActive(false)
    } else {
      repository.getTopPodcasts().then((repositoryData) => {
        const podcasts = podcastId ? repository.getPodcastById(repositoryData, podcastId) : repositoryData
        setRepositoryData(podcasts)
        setLoaderPodcastActive(false)
        setTopPodcastLocalStorage(repositoryData)
      })
    }
  }, [])

  return { repositoryData, filterPodcasts }
}
