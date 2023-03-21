import { useEffect, useState } from 'react'

function getStorageValue (key, defaultValue) {
  const item = localStorage.getItem(key)
  const itemExpire = localStorage.getItem(key + 'ExpireDate')
  const parsedItem = JSON.parse(item)
  const parsedItemExpire = JSON.parse(itemExpire)
  const itemExpireDate = parsedItemExpire != null ? new Date(parsedItemExpire) : undefined

  // If item has expired return default value
  if (itemExpireDate && itemExpireDate < new Date()) { return defaultValue }
  return parsedItem || defaultValue
}

function saveItem (key, value) {
  localStorage.setItem(key, JSON.stringify(value))
  const expireDate = new Date()
  expireDate.setHours(expireDate.getHours() + 24)
  localStorage.setItem(key + 'ExpireDate', JSON.stringify(expireDate))
}

export function useLocalStorage (key, defaultValue) {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    saveItem(key, value)
  }, [key, value])

  return [value, setValue]
}
