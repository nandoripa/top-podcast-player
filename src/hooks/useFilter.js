import { useEffect, useState } from 'react'

export function useFilter () {
  const [filter, updateFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if (!filter) {
      return
    }

    if (filter.length < 3) {
      setErrorMessage('The filter must contains at lest 3 chars')
      return
    }

    setErrorMessage(null)
  }, [filter])

  return { filter, updateFilter, errorMessage }
}
