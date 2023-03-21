import React, { useCallback } from 'react'
import debounce from 'just-debounce-it'
import { PodcastCard } from '../../components/postcastCard/PostcastCard'
import { usePodcastRepository } from '../../hooks/usePodcastRepository'
import { useFilter } from '../../hooks/useFilter'
import styles from './PodcastList.module.scss'

export function PodcastList ({ repository }) {
  const { filter, updateFilter, errorMessage } = useFilter()
  const { repositoryData, isLoading, filterPodcasts } = usePodcastRepository(repository, filter)

  const debouncedFilterPodcast = useCallback(
    debounce(filter => {
      filterPodcasts(filter)
    }, 300)
    , [filterPodcasts, errorMessage]
  )

  const handleChangeFilter = (event) => {
    const newFilter = event.target.value
    updateFilter(newFilter)
    if (newFilter.length === 0 || newFilter.length >= 3) {
      debouncedFilterPodcast(newFilter)
    }
  }

  let resultMessage
  if (!isLoading && repositoryData.length === 0) {
    resultMessage = filter ? `No podcasts found for ${filter}` : 'No podcasts available at this moment. Please come back later...'
  }

  return (
    <>
    <div className={styles.filter__container}>
      <div className={styles.filter}>
        <span className={styles.filter__results} >{repositoryData.length}</span>
        <input className={styles.filter__box} onChange={handleChangeFilter} value={filter} name='filter' placeholder='Filter podcasts...'/>
      </div>
      <p className={styles.filter__error}>{errorMessage}</p>
    </div>
      <section className={styles.podcastList}>
        {isLoading
          ? (<h2>Loading...</h2>)
          : (
              repositoryData.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast}/>
              ))
            )}
      </section>

      {resultMessage && (
        <div>
          <span>{resultMessage}</span>
        </div>
      )}
    </>
  )
}
