import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function usePodcastRepository (repository, filter) {
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
      setRepositoryData(topPodcastsLocalStorage)
      setIsLoading(false)
    } else {
      repository.getTopPodcasts().then((repositoryData) => {
        setRepositoryData(repositoryData)
        setTopPodcastLocalStorage(repositoryData)
        setIsLoading(false)
      })
    }
  }, [])

  return { repositoryData, isLoading, filterPodcasts }
}
