import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './PodcastCard.module.scss'

export function PodcastCard ({ podcast }) {
  const navigate = useNavigate()
  const goToPodcastDetailt = () => {
    navigate(`/podcast/${podcast.id}`)
  }

  return (
        <div className={styles.podcastCard} onClick={goToPodcastDetailt}>
            <img className={styles.podcastCard__image} src={podcast.image} alt={podcast.title} />
            <span className={styles.podcastCard__title}>{podcast.title}</span>
            <span className={styles.podcastCard__author}>{podcast.author}</span>
        </div>
  )
}
