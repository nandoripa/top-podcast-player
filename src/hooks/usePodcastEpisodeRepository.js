import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { useLoader } from './useLoader'

export function usePodcastEpisodeRepository ({ repository, podcastId, episodeId }) {
  const [repositoryData, setRepositoryData] = useState([])
  const { setLoaderEpisodesActive } = useLoader()
  const [podcastsEpisodeLocalStorage, setPodcastsEpisodeLocalStorage] = useLocalStorage(`podcast-${podcastId}-episodes`, undefined)

  useEffect(() => {
    setLoaderEpisodesActive(true)

    if (podcastsEpisodeLocalStorage) {
      const episodes = podcastId && episodeId ? repository.getEpisodeById(podcastsEpisodeLocalStorage, podcastId, episodeId) : podcastsEpisodeLocalStorage
      setRepositoryData(episodes)
      setLoaderEpisodesActive(false)
    } else {
      repository.getEpisodes(podcastId).then((repositoryData) => {
        const episodes = podcastId && episodeId ? repository.getEpisodeById(repositoryData, podcastId, episodeId) : repositoryData
        setRepositoryData(episodes)
        setLoaderEpisodesActive(false)
        setPodcastsEpisodeLocalStorage(repositoryData)
      })
    }
  }, [episodeId])

  return { repositoryData }
}
