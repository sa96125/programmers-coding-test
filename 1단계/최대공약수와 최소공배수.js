const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);

function solution(n, m) {
    return [gcd(n, m), lcm(n, m)];
}


// 유클리드 호제법을 안다면 쉽게 풀이가능.