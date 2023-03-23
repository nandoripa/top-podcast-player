import React from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { useLoader } from '../../hooks/useLoader'
import styles from './Header.module.scss'

export function Header () {
  const { loaderPodcastActive, loaderEpisodesActive } = useLoader()
  return (
    <header>
        <section>
        <h1 className={styles.app__name}>
            <Link to='/'>Podcaster</Link>
            {(loaderPodcastActive || loaderEpisodesActive) && (
        <div>
          <ClipLoader size='28' color='#2071b3'/>
        </div>
            )}
        </h1>
        </section>
    </header>
  )
}
