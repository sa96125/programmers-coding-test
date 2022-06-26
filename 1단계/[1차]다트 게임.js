const splitEachThrow = threeShots => [...threeShots.matchAll(/[0-9]+([SDT])([*#]?)/g)].map(str => str[0])

const sqrt = {
    S : 1,
    D : 2,
    T : 3
}

const setDart = dart => {
    const [score, abbr, ev] = dart.split(/([SDT])/)
    return [score**sqrt[abbr], ev]
} 

function solution(dartResult) {
    const darts = splitEachThrow(dartResult).map(setDart)
    let score = {
        '0' : 0,
        '1' : 0,
        '2' : 0
    };
    
    for(let i = 0 ; i < darts.length ; i++) {
        const [ point, effect ] = darts[i]
        
        if(effect === '*') {
            score[i] += point * 2
            if( i-1 >= 0) {
                score[i-1] = score[i-1] * 2 
            }
        } else if (effect === '#') {
            score[i] -= point
        } else {
            score[i] += point
        }
    }

    return [...Object.values(score)].reduce((a,b) => a+b)
}