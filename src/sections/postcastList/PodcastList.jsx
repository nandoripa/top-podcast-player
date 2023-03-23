import React, { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'
import { PodcastCard } from '../../components/postcastCard/PostcastCard'
import { usePodcastRepository } from '../../hooks/usePodcastRepository'
import styles from './PodcastList.module.scss'
import { useLoader } from '../../hooks/useLoader'

export function PodcastList ({ repository }) {
  const [filter, updateFilter] = useState('')
  const [errorFilter, setErrorFilter] = useState(null)
  const { repositoryData, filterPodcasts } = usePodcastRepository({ repository, filter })
  const { loaderPodcastActive } = useLoader()

  const debouncedFilterPodcast = useCallback(
    debounce(filter => {
      if (!filter || filter.length === 0 || filter.length >= 3) {
        setErrorFilter(null)
        filterPodcasts(filter)
      } else if (filter.length < 3) {
        setErrorFilter('The filter must contains at least 3 chars')
      }
    }, 300)
    , [filterPodcasts, errorFilter]
  )

  const handleChangeFilter = (event) => {
    const newFilter = event.target.value
    updateFilter(newFilter)
    debouncedFilterPodcast(newFilter)
  }

  let resultFilter
  if (!loaderPodcastActive && repositoryData.length === 0 && filter) {
    resultFilter = `No podcasts found for ${filter}`
  }

  return (
    <>
          <div className={styles.filter__container}>
          <div className={styles.filter}>
            <span className={`filter__results ${styles.filter__results}`} >{repositoryData.length}</span>
            <input className={styles.filter__box} onChange={handleChangeFilter} value={filter} name='filter' placeholder='Filter podcasts...'/>
          </div>
          <p className={styles.filter__error}>{errorFilter}</p>
        </div>
        {
          !resultFilter
            ? (
            <section className={styles.podcastList}>
            {!loaderPodcastActive && (
              repositoryData.map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast}/>
              ))
            )}
          </section>
              )
            : <div>
            <span>{resultFilter}</span>
          </div>
        }

    </>
  )
}
