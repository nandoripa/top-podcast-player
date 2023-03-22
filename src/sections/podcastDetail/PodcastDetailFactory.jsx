import React from 'react'
import { PodcastRepository } from '../../infrastructure/PodcastRepository'
import { PodcastDetail } from './PodcastDetail'

const repository = new PodcastRepository()

export class PodcastDetailFactory {
  static create () {
    return (
      <PodcastDetail repository={repository} />
    )
  }
}
