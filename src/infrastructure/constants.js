export const APPLE_TOP_PODCASTS_ENDPOINT = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
export const getApplePodcastEpisodesEndpoint = (podcastId) => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=100`)}`
}
