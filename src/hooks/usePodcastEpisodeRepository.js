import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function usePodcastEpisodeRepository ({ repository, podcastId }) {
  const [repositoryData, setRepositoryData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [podcastsEpisodeLocalStorage, setPodcastsEpisodeLocalStorage] = useLocalStorage(`podcast-${podcastId}-episodes`, undefined)

  useEffect(() => {
    setIsLoading(true)

    if (podcastsEpisodeLocalStorage) {
      setRepositoryData(podcastsEpisodeLocalStorage)
      setIsLoading(false)
    } else {
      repository.getEpisodes(podcastId).then((repositoryData) => {
        setRepositoryData(repositoryData)
        setIsLoading(false)
        setPodcastsEpisodeLocalStorage(repositoryData)
      })
    }
  }, [])

  return { repositoryData, isLoading }
}
