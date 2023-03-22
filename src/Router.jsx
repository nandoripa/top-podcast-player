import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EpisodeDetail } from './sections/episodeDetail/EpisodeDetail'
import { Layout } from './sections/layout/Layout'
import { PodcastDetailFactory } from './sections/podcastDetail/PodcastDetailFactory'
import { PodcastListFactory } from './sections/postcastList/PodcastListFactory'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
        element: <EpisodeDetail />
      }
    ]
  }
])

export function Router () {
  return <RouterProvider router={router} />
}
