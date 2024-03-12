export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  return map.forEach((v, k, m) => {
    if (v === 1) {
      m.set(k, 100);
    }
  });
}
