import React from 'react'
import { Outlet } from 'react-router-dom'

export function Layout () {
  return (
    <>
      <header>
        <section>
          <h1>Apple Podcasts</h1>
        </section>
      </header>
      <Outlet />
    </>
  )
}
