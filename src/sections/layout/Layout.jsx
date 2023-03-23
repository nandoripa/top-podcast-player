import React from 'react'
import { Outlet } from 'react-router-dom'
import { LoaderProvider } from '../../context/loader'
import { Header } from '../../components/header/Header'
import styles from './Layout.module.scss'
import { ErrorBoundary } from './ErrorBoundary'

export function Layout () {
  return (
    <LoaderProvider>
      <div className={styles.container}>
        <Header />
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
    </LoaderProvider>
  )
}
