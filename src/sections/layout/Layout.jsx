import React from 'react'
import { Outlet } from 'react-router-dom'
import { LoaderProvider } from '../../context/loader'
import { Header } from '../../components/header/Header'
import styles from './Layout.module.scss'

export function Layout () {
  return (
    <LoaderProvider>
      <div className={styles.container}>
        <Header />
        <Outlet />
      </div>
    </LoaderProvider>
  )
}
