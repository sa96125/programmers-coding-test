const total = (n, a ,b) => n * (a + b) / 2 

function solution(a, b) {
    return total(Math.abs(b - a) + 1, a, b)
}