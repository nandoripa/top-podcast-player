import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './sections/layout/ErrorPage'
import { Layout } from './sections/layout/Layout'
import { PodcastDetailFactory } from './sections/podcastDetail/PodcastDetailFactory'
import { PodcastListFactory } from './sections/postcastList/PodcastListFactory'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: PodcastListFactory.create()
      },
      {
        path: '/podcast/:podcastId/',
        element: PodcastDetailFactory.create()
      },
      {
        path: '/podcast/:podcastId/episode/:episodeId',
        element: PodcastDetailFactory.create()
      }
    ]
  }
])

export function Router () {
  return <RouterProvider router={router} />
}
