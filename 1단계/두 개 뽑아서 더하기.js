const sum = (i, j) => i + j
const set = (arr) => [...new Set(arr)]


function solution(numbers) {
    const answer = [];

    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1;j < numbers.length; j++ ) {
            answer.push(sum(numbers[i], numbers[j]))
        }
    }
    
    return set(answer).sort((a,b) => a-b)
}