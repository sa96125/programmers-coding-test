const sum = arr => arr.reduce((a,b) => a+b)

function solution(numbers) {
    return sum([0, 1, 2 ,3 ,4, 5, 6, 7, 8, 9]) - sum(numbers)
}