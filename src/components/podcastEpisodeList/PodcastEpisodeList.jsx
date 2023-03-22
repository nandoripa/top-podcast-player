import React from 'react'
import { Link } from 'react-router-dom'
import { parseTimeToHumanReadable } from '../../utils/DateTime'
import styles from './PodcastEpisodeList.module.scss'

export function PodcastEpisodeList ({ episodes, isLoading }) {
  return (
    <>
        {isLoading
          ? (<h2>Loading...</h2>)
          : (
            <div className={styles.podcastDetailEpisodes}>
                <div className={styles.podcastDetailEpisodes__header}>
                    <span>Episodes: {episodes.length}</span>
                </div>
                <div className={styles.podcastDetailEpisodes__list}>
                    {
                        episodes.length === 0
                          ? (
                            <p>No episodes available at this moment. Please come back later...</p>
                            )
                          : (
                                <table cellSpacing='0' cellPadding='0'>
                                    <thead>
                                        <tr>
                                            <th className={styles.podcastDetailEpisodes__label}>Title</th>
                                            <th className={styles.podcastDetailEpisodes__label}>Date</th>
                                            <th className={styles.podcastDetailEpisodes__label}>Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {episodes.map((episode) => (
                                        <tr className={styles.podcastDetailEpisodes__item} key={episode.id}>
                                            <td className={styles.podcastDetailEpisodes__item__data}>
                                                <Link className={styles.podcastDetailEpisodes__item__link} to={`/podcast/${episode.podcastId}/episode/${episode.id}`}>{episode.title}</Link>
                                            </td>
                                            <td className={styles.podcastDetailEpisodes__item__data}>{episode.releaseDate}</td>
                                            <td className={styles.podcastDetailEpisodes__item__data}>{episode.duration}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )
                    }
                </div>
            </div>
            )}
    </>
  )
}
