export default function cleanSet(set, startString) {
  let str = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      str += (str.length === 0 ? '' : '-') + value.slice(startString.length);
    }
  }
  return str;
}
