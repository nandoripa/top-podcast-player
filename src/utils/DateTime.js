export function parseTimeToHumanReadable (millis, showSeconds) {
  const seconds = (millis / 1000) % 60
  const minutes = Math.floor((millis / (1000 * 60)) % 60)
  const hours = Math.floor((millis / (1000 * 60 * 60)) % 24)
  const result = ''.concat(hours > 0 ? `${hours}h ` : '').concat(minutes > 0 ? `${minutes}m ` : '')
  if (showSeconds) result.concat(seconds > 0 ? `${seconds}s` : '')
  return result
}
