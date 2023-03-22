import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function usePodcastEpisodeRepository ({ repository, podcastId, episodeId }) {
  const [repositoryData, setRepositoryData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [podcastsEpisodeLocalStorage, setPodcastsEpisodeLocalStorage] = useLocalStorage(`podcast-${podcastId}-episodes`, undefined)

  useEffect(() => {
    setIsLoading(true)

    if (podcastsEpisodeLocalStorage) {
      const episodes = podcastId && episodeId ? repository.getEpisodeById(podcastsEpisodeLocalStorage, podcastId, episodeId) : podcastsEpisodeLocalStorage
      setRepositoryData(episodes)
      setIsLoading(false)
    } else {
      repository.getEpisodes(podcastId).then((repositoryData) => {
        const episodes = podcastId && episodeId ? repository.getEpisodeById(repositoryData, podcastId, episodeId) : repositoryData
        setRepositoryData(episodes)
        setIsLoading(false)
        setPodcastsEpisodeLocalStorage(repositoryData)
      })
    }
  }, [episodeId])

  return { repositoryData, isLoading }
}
