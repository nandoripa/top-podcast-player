import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function usePodcastRepository (repository) {
  const [repositoryData, setRepositoryData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [topPodcastsLocalStorage, setTopPodcastLocalStorage] = useLocalStorage('topPodcasts', undefined)

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

  return { repositoryData, isLoading }
}
