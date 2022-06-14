// * 수도 코드
// * 범위를 순회한다.
// * 약수의 갯수
// * 출력 값은 짝수일 경우 + 홀수일 경우 - 합산값.


const getDivisorNumber = (i) => {
	let count = 0
    
    for(let j = 1; j <= i ; j++) {
        if(i%j === 0) {
            count += 1;
        }
    }
 
    return count
}


function solution(left, right) {
    var answer = 0;
    
    for(let i = left ; i < right + 1; i ++) {
        if( getDivisorNumber(i)%2 === 0 ) {
            answer += i
        } else {
            answer -= i
        }
    }
    
    return answer;
}


// * 다른풀이
//   제곱근이 정수면 약수의 갯수가 홀수다.
//   Number.isInteger(Math.sqrt(i))