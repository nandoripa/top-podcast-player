import React from 'react'
import styles from './PodcastDetailCard.module.scss'

export function PodcastDetailCard ({ podcast }) {
  return (
    <div className={styles.podcastDetailCard}>
      <img className={styles.podcastDetailCard__image} src={podcast.image} alt={podcast.title} />
      <div className={styles.podcastDetailCard__header}>
        <p className={styles.podcastDetailCard__title}>{podcast.title}</p>
        <p className={styles.podcastDetailCard__author}>by {podcast.author}</p>
      </div>
      <div className={styles.podcastDetailCard__summary}>
        <p className={styles.podcastDetailCard__summaryLabel}>Description:</p>
        <p className={styles.podcastDetailCard__summaryContent}>{podcast.summary}</p>
      </div>
    </div>
  )
}
