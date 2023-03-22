import React from 'react'
import { useParams } from 'react-router-dom'
import { PodcastEpisodeList } from '../../components/podcastEpisodeList/PodcastEpisodeList'
import { PodcastDetailCard } from '../../components/postcastDetailCard/PostcastDetailCard'
import { usePodcastEpisodeRepository } from '../../hooks/usePodcastEpisodeRepository'
import { usePodcastRepository } from '../../hooks/usePodcastRepository'
import styles from './PodcastDetail.module.scss'

export function PodcastDetail ({ repository }) {
  const { podcastId } = useParams()
  const { repositoryData: podcastData, isLoading: isPodcastLoading } = usePodcastRepository({ repository, podcastId })
  const { repositoryData: episodes, isLoading: isEpisodesLoading } = usePodcastEpisodeRepository({ repository, podcastId })
  const podcast = podcastData[0]

  return (
    <>
    {!isPodcastLoading && podcast && (
      <div className={styles.podcastDetailContainer}>
        <PodcastDetailCard podcast={podcast}/>
        {!isPodcastLoading && podcast && (
          <PodcastEpisodeList episodes={episodes} isLoading={isEpisodesLoading} />
        )}
      </div>
    )}
    {!isPodcastLoading && !podcast && (
      <div>
        <p>Oopppss!!! Sorry this podcast is not found</p>
      </div>
    )}
    </>
  )
}
