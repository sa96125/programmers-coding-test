function solution(n) {
  return String(n).split("").reverse().map(str => +str)
}