function solution(x, n) {
  const answer = new Array(n).fill(1)
  return answer.map((num, index) => x * (index + 1))
}