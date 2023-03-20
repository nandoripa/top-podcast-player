import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EpisodeDetail } from './sections/episodeDetail/EpisodeDetail'
import { Layout } from './sections/layout/Layout'
import { PodcastDetail } from './sections/podcastDetail/PodcastDetail'
import { PodcastList } from './sections/postcastList/PodcastList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <PodcastList />
      },
      {
        path: '/podcast/:podcastId/',
        element: <PodcastDetail />
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
