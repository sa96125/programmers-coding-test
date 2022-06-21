function solution(n) {
    let x = 1
    do {
      if( n % x === 1 ) return x
    } while (x++);
  }