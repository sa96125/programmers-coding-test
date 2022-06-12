// * 의사코드
// * 고정 된 키패드 영역 변수로 나누기
// * 컬럼 눌렸을 때, 손 포지션 이동 , 문자열 추가
// * 중간 열은 예외, 더 가까운 손인지 체크하고 손 이동, 문자열 추가
// * 만약 거리가 같으면 hand 변수를 확인
// * hand의 문자열은 풀네임이라 약어로 변경후 붙인다.
// * 반환 값은 누른 손의 순서를 붙인 문자열.


const getDistance = (pos1, pos2) => Math.abs(pos1[1] - pos2[1]) + Math.abs(pos1[0] - pos2[0]);
const parseAbbr = hand => hand === 'right' ? 'R' : 'L';

function solution(numbers, hand) {
    
    const keypad = {
         1  : [0,0], 2 : [0,1],  3  : [0,2],
         4  : [1,0], 5 : [1,1],  6  : [1,2],
         7  : [2,0], 8 : [2,1],  9  : [2,2],
        '*' : [3,0], 0 : [3,1], '#' : [3,2],
    };

    let answer = '';
    let posOfL = keypad["*"];
    let posOfR = keypad["#"];
    
    const leftColNums   = [ 1, 4, 7 ];
    const rightColNums  = [ 3, 6, 9 ];
    const middleColNums = [ 2, 5, 8, 0 ];

    
    numbers.forEach(number => {

        if(leftColNums.includes(number)) {
            posOfL = keypad[number];
            answer += 'L';
        } 
        
        else if(rightColNums.includes(number)) {
            posOfR = keypad[number];
            answer += 'R';
        } 
        
        else {
            
            if(getDistance(posOfL, keypad[number]) > getDistance(posOfR, keypad[number])){
                posOfR = keypad[number];
                answer += 'R';
            }
            
            else if(getDistance(posOfL, keypad[number]) < getDistance(posOfR, keypad[number])){
                posOfL = keypad[number];
                answer += 'L';
            }
            
            else {
                const abbrOfHand = parseAbbr(hand)
                answer += abbrOfHand

                if(abbrOfHand === "L") {
                    posOfL = keypad[number];
                } else {
                    posOfR = keypad[number];
                }
            } 
        } 
    
    })

    return answer
}