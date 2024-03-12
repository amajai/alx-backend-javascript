export default function cleanSet(set, startString) {
  if (!set || !startString || !typeof startString !== 'string') {
    return '';
  }
  let str = '';
  for (const value of set) {
    if (startString && value.startsWith(startString)) {
      str += (str.length === 0 ? '' : '-') + value.slice(startString.length);
    }
  }
  return str;
}