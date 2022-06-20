function solution(price, money, count) {
    
    let total = 0
    
    for(let i = 1; i <= count; i++) {
        total += (i*price)
    }
    
    return total - money > 0 ? total - money : 0;
  }
  
  
  // 가우스 공식을 활용한다면 베스트!