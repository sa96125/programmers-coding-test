function solution(N, stages) {
    
    let stopedPerson = 0
    let len = stages.length
    stages = stages.filter(stage => stage <= N)
    
    const map = new Map()
    
    for(let i = 1; i <= N; i++) {
        map.set(i, 0)
    }
    
    for(stage of stages) {
        map.set(stage, map.get(stage) + 1)
    }
  
  
    for(const [k, v] of map) {
        const temp = map.get(k)
        map.set(k, map.get(k) / (len-stopedPerson))
        stopedPerson += temp
    }
    
    return [...map].sort((a,b) => b[1] - a[1]).map(el => el[0])
    
  }