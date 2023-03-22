import React from 'react'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'
import styles from './PodcastEpisodeCard.module.scss'

export function PodcastEpisodeCard ({ episode }) {
  const summary = DOMPurify.sanitize(episode.summary, { USE_PROFILES: { html: true } })
  return (
    <div className={styles.podcastEpisodeCard}>
      <div className={styles.podcastEpisodeCard__content}>
        <h2 className={styles.podcastEpisodeCard__title}>{episode.title}</h2>
        <div className={styles.podcastEpisodeCard__summary}>
          {parse(summary)}
        </div>
        <audio className={styles.podcastEpisodeCard__player} controls src={episode.trackUrl}>
          <a href={episode.trackUrl}>Download podcast</a>
        </audio>
        <div className={styles.podcastEpisodeCard__footer}>
          <Link to={`/podcast/${episode.podcastId}`}>Back to list</Link>
        </div>
      </div>
    </div>
  )
}
