export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((val) =>val.includes(startString))
    .map((val) => val.replace(startString, ''))
    .join('-')
  
}
