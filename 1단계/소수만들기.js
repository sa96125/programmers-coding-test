const isPrime = (number) => {
    
    for(let i = 2; number > i; i++) {
        if(number % i === 0) { 
            return false;
        }
    }
    
    return number > 1;
    
  }
  
  
  function solution(nums) {
    
    let answer = 0;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let z = j+1; z < nums.length ; z++) {
                
                if(isPrime(nums[i]+nums[j]+nums[z])) {
                    answer += 1
                }
  
            }
        }  
    }
  
    return answer;
    
  }