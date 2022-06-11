// * 수도코드
// * 숫자와 문자 매핑
// * 문자열 반복 치환
// * 반환 값 숫자 타입.


const numbers = {
    zero  : '0',
    one   : '1',
    two   : '2',
    three : '3',
    four  : '4',
    five  : '5',
    six   : '6',
    seven : '7',
    eight : '8',
    nine  : '9'
};

const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
];

function solution(s) {
    for(word of words) {
        s = s.replace(new RegExp(word, "gi"), numbers[word])
    }
    return parseInt(s);
}