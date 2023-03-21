import React from 'react'
import { PodcastCard } from '../../components/postcastCard/PostcastCard'
import { usePodcastRepository } from '../../hooks/usePodcastRepository'
import styles from './PodcastList.module.scss'

export function PodcastList ({ repository }) {
  const { repositoryData, isLoading } = usePodcastRepository(repository)
  return (
    <>
      <section className={styles.podcastList}>
        {isLoading
          ? (<h2>Loading...</h2>)
          : (
              repositoryData.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast}/>
              ))
            )}
      </section>

      {!isLoading && repositoryData.length === 0 && (
        <div>
          <span>No podcasts available at this moment. Please come back later...</span>
        </div>
      )}
    </>
  )
}
