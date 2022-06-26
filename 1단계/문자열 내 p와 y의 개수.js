function solution(s){
    const map = new Map();
    
    for(char of s.toLowerCase()) {
        if(!map.get(char)) {
            map.set(char, 1)
        } else {
            map.set(char, map.get(char) + 1)
        }
    }
    
    return map.get('p') === map.get('y')
}


// 다른 사람의 풀이
// 1. return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// 2. return s.match(/p/ig).length === s.match(/y/ig).length;