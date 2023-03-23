import React from 'react'
import { useParams } from 'react-router-dom'
import { PodcastEpisodeList } from '../../components/podcastEpisodeList/PodcastEpisodeList'
import { PodcastDetailCard } from '../../components/postcastDetailCard/PostcastDetailCard'
import { PodcastEpisodeCard } from '../../components/postcastEpisodeCard/PostcastEpisodeCard'
import { useLoader } from '../../hooks/useLoader'
import { usePodcastEpisodeRepository } from '../../hooks/usePodcastEpisodeRepository'
import { usePodcastRepository } from '../../hooks/usePodcastRepository'
import styles from './PodcastDetail.module.scss'

export function PodcastDetail ({ repository }) {
  const { podcastId, episodeId } = useParams()
  const { repositoryData: podcastData } = usePodcastRepository({ repository, podcastId })
  const { repositoryData: episodes } = usePodcastEpisodeRepository({ repository, podcastId, episodeId })
  const { loaderPodcastActive, loaderEpisodesActive } = useLoader()
  const podcast = podcastData[0]

  return (
    <>
    {!loaderPodcastActive && !loaderEpisodesActive && podcast &&
      (
        <div className={styles.podcastDetailContainer}>
          <PodcastDetailCard podcast={podcast}/>
          {
            episodeId && episodes.length === 1
              ? (
                  <PodcastEpisodeCard episode={episodes[0]}/>
                )
              : (
              <PodcastEpisodeList episodes={episodes} />
                )
          }
        </div>
      )
    }
    </>
  )
}
