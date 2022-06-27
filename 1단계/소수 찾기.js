function solution(n) {
  const numArray = new Array(n + 1).fill(1).fill(0, 0, 2);
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
     for (let j = 2; i * j <= n; j++){
         numArray[i * j] = 0;
     }
  }

  return numArray.reduce((acc, cur) => acc+ cur)
}