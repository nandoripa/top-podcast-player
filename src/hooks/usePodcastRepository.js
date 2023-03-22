import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function usePodcastRepository ({ repository, filter, podcastId }) {
  const [repositoryData, setRepositoryData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [topPodcastsLocalStorage, setTopPodcastLocalStorage] = useLocalStorage('topPodcasts', undefined)
  const previousFilter = useRef(filter)

  const filterPodcasts = useCallback((filter) => {
    if (filter === previousFilter.current) return

    setIsLoading(true)
    if (filter === '') {
      setRepositoryData(topPodcastsLocalStorage)
    } else {
      previousFilter.current = filter
      const filteredPodcasts = repository.filter(topPodcastsLocalStorage, filter)
      setRepositoryData(filteredPodcasts)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    setIsLoading(true)

    if (topPodcastsLocalStorage) {
      const podcasts = podcastId ? repository.getById(topPodcastsLocalStorage, podcastId) : topPodcastsLocalStorage
      setRepositoryData(podcasts)
      setIsLoading(false)
    } else {
      repository.getTopPodcasts().then((repositoryData) => {
        const podcasts = podcastId ? repository.getById(repositoryData, podcastId) : repositoryData
        setRepositoryData(podcasts)
        setIsLoading(false)
        setTopPodcastLocalStorage(repositoryData)
      })
    }
  }, [])

  return { repositoryData, isLoading, filterPodcasts }
}
