function solution(x) {
  return Number.isInteger(x / String(x).split("").reduce((a,b)=> Number(a)+Number(b)))
}