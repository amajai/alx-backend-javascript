export default function hasValuesFromArray(set, array) {
  let ans = true;
  for (const val of array) {
    if (!set.has(val)) {
      ans = false;
      break;
    }
  }
  return ans;
}
