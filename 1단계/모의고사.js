const scores = {
    1: 0,
    2: 0,
    3: 0
  }
  
  
  const answerOfOne = (i) => (i % 5) + 1;
  
  const answerOfTwo = (i) => {
  
    if(i % 2 === 0) return 2
    
    else {
  
        if(i % 8 === 1) return 1
        else if(i % 8 === 3) return 3
        else if(i % 8 === 5) return 4
        else if(i % 8 === 7) return 5
        
    }
    
  }
  
  const answerOfThree = (i) => {
  
    if(i % 10 === 0) return 3
    else if(i % 10 === 1) return 3
    else if(i % 10 === 2) return 1
    else if(i % 10 === 3) return 1
    else if(i % 10 === 4) return 2
    else if(i % 10 === 5) return 2
    else if(i % 10 === 6) return 4
    else if(i % 10 === 7) return 4
    else if(i % 10 === 8) return 5
    else if(i % 10 === 9) return 5
    
  }
  
  
  function solution(answers) {
    
    const result = []
  
    
    for(let i = 0; i < answers.length; i++) {
  
        if( answers[i] === answerOfOne(i)) {
            scores['1'] += 1          
        }
  
        if( answers[i] === answerOfTwo(i)) {
            scores['2'] += 1
        }
  
        if( answers[i] === answerOfThree(i)) {
            scores['3'] += 1        
        }
    }
  
    
    const highScore = Math.max(...Object.values(scores));
  
    
    for (const [key, value] of Object.entries(scores)) {
        
        if(value === highScore) {
            
             result.push(+key)
            
        }
    }
  
    return result.length === 0 ? [] : result
  }
  
  
  
  
  // *note 
  // 때로는 너무 공식을 찾아내려 하지말고 단순하게 작업하자.
  // 다른 사람들의 문제풀이를 봤을 때, 전부 고정된 패턴을 미리 정의 해놓고 풀이함.