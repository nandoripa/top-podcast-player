import { useEffect, useState } from 'react'

export function usePodcastRepository (repository) {
  const [repositoryData, setRepositoryData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    repository.getTopPodcasts().then((repositoryData) => {
      setRepositoryData(repositoryData)
      setIsLoading(false)
    })
  }, [])

  return { repositoryData, isLoading }
}
