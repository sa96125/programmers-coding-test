function solution(s) {
    const len = s.length
    
   return len % 2 === 0 
        ? s.slice(len/2 - 1, len/2 + 1)
        : s.charAt(Math.floor(len/2))
}