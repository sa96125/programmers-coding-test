function solution(absolutes, signs) {
    const numbers = absolutes.map((absolute, index) => signs[index] ? absolute : -absolute )
    return numbers.reduce((a,b) => a+b)
  }