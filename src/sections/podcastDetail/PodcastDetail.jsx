import React from 'react'
import { useParams } from 'react-router-dom'
import { PodcastEpisodeList } from '../../components/podcastEpisodeList/PodcastEpisodeList'
import { PodcastDetailCard } from '../../components/postcastDetailCard/PostcastDetailCard'
import { PodcastEpisodeCard } from '../../components/postcastEpisodeCard/PostcastEpisodeCard'
import { usePodcastEpisodeRepository } from '../../hooks/usePodcastEpisodeRepository'
import { usePodcastRepository } from '../../hooks/usePodcastRepository'
import styles from './PodcastDetail.module.scss'

export function PodcastDetail ({ repository }) {
  const { podcastId, episodeId } = useParams()
  const { repositoryData: podcastData, isLoading: isPodcastLoading } = usePodcastRepository({ repository, podcastId })
  const { repositoryData: episodes, isLoading: isEpisodesLoading } = usePodcastEpisodeRepository({ repository, podcastId, episodeId })
  const podcast = podcastData[0]

  return (
    <>
    {!isPodcastLoading && podcast
      ? (
          <div className={styles.podcastDetailContainer}>
            <PodcastDetailCard podcast={podcast}/>
            {
              episodeId && episodes.length === 1
                ? (
                    <PodcastEpisodeCard episode={episodes[0]}/>
                  )
                : (
                <PodcastEpisodeList episodes={episodes} isLoading={isEpisodesLoading} />
                  )
            }
          </div>
        )
      : (
          <div>
            <p>Oopppss!!! Sorry this podcast is not found</p>
          </div>
        )
  }
    </>
  )
}
