import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

export function Layout () {
  return (
    <div className={styles.container}>
      <header>
        <section>
          <h1 className={styles.app__name}>
            <Link to='/'>Podcaster</Link>
          </h1>
        </section>
      </header>
      <Outlet />
    </div>
  )
}
