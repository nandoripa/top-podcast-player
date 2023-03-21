import { APPLE_TOP_PODCASTS_ENDPOINT } from './constants'

export class PodcastRepository {
  getTopPodcasts = async () => {
    return fetch(APPLE_TOP_PODCASTS_ENDPOINT)
      .then(response => response.json())
      .then(response => {
        const podcasts = response.feed?.entry
        return podcasts.map((podcast) => (
          this.mapExternalPodcast(podcast)
        ))
      })
  }

  mapExternalPodcast = (podcast) => {
    return {
      id: podcast.id.attributes['im:id'],
      title: podcast['im:name'].label,
      author: podcast['im:artist'].label,
      image: podcast['im:image'].at(-1).label
    }
  }

  filter = (podcasts, filter) => {
    const filteredPodcasts = podcasts.filter(podcast => podcast.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || podcast.author.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    return filteredPodcasts
  }
}
