function solution(s) {
  return s.search(/[^0-9]/) === -1 && s.length === (4 || 6)
}