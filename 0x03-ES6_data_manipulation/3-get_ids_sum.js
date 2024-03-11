export default function getStudentIdsSum(arr) {
  return arr.reduce((accum, currVal) => accum + currVal.id, 0);
}
