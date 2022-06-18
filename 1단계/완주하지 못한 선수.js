function solution(participant, completion) {
    const map = new Map();
  
    for(person of participant) {
        map.set(person, map.has(person) ? map.get(person) + 1 : 1)
    }
  
    for(person of completion) {
        map.get(person) > 1 ? map.set(person, map.get(person) - 1) : map.delete(person)
    }
  
    return [...map.keys()][0]
  }
  
  
  
  // *note
  // Map의 메서드 활용방법 이해 및 연습필요.
  // for문과 forEach와 같은 내장함 수의 차이점.
  
  
  // for문을 한번에 처리하는 방법이 인상 깊었던 다른 사람의 풀이 방법
  // function solution(participant, completion) {
  //     const map = new Map();
  
  //     for(let i = 0; i < participant.length; i++) {
  //         let a = participant[i], 
  //             b = completion[i];
  
  //         map.set(a, (map.get(a) || 0) + 1);
  //         map.set(b, (map.get(b) || 0) - 1);
  //     }
  
  //     for(let [k, v] of map) {
  //         if(v > 0) return k;
  //     }
  // }