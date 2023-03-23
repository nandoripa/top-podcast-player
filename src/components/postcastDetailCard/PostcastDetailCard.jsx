import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PodcastDetailCard.module.scss'

export function PodcastDetailCard ({ podcast }) {
  return (
    <div className={`podcastDetailCard ${styles.podcastDetailCard}`}>
      <Link to={`/podcast/${podcast.id}`}><img className={styles.podcastDetailCard__image} src={podcast.image} alt={podcast.title} /></Link>
      <div className={styles.podcastDetailCard__header}>
        <p className={`podcastDetailCardTitle ${styles.podcastDetailCard__title}`}><Link to={`/podcast/${podcast.id}`}>{podcast.title}</Link></p>
        <p className={`podcastDetailCardAuthor ${styles.podcastDetailCard__author}`}>by <Link to={`/podcast/${podcast.id}`}>{podcast.author}</Link></p>
      </div>
      <div className={styles.podcastDetailCard__summary}>
        <p className={styles.podcastDetailCard__summaryLabel}>Description:</p>
        <p className={`podcastDetailCardSummary ${styles.podcastDetailCard__summaryContent}`}>{podcast.summary}</p>
      </div>
    </div>
  )
}
