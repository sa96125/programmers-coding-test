function solution(arr) {
  return arr.reduce((a,b) => Number(a) + Number(b)) / arr.length
}