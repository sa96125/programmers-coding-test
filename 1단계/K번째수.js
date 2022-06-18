const getKthNum = (array , command) => {
    return array.slice(command[0]-1, command[1]).sort((a,b) => a-b)[command[2]-1]
  }
  
  
  function solution(array, commands) {
    return commands.map(command => getKthNum(array, command))
  }
  
  
  // *note
  // slice의 기본적인 특징 이해
  // 내림차순 정렬