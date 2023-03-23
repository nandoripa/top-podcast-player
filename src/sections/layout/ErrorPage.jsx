import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import styles from './Layout.module.scss'

export default function ErrorPage () {
  const error = useRouteError()
  console.error(error)

  return (
    <div className={styles.container}>
         <header>
            <section>
            <h1 className={styles.app__name}>
                <Link to='/'>Podcaster</Link>
            </h1>
            </section>
    </header>
        <p>Sorry, this url was not found</p>
    </div>
  )
}
