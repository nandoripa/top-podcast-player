import React from 'react'
import { PodcastRepository } from '../../infrastructure/PodcastRepository'
import { PodcastList } from './PodcastList'

const repository = new PodcastRepository()

export class PodcastListFactory {
  static create () {
    return (
      <PodcastList repository={repository} />
    )
  }
}
