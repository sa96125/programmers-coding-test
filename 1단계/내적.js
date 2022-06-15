function solution(a, b) {    
    return a.map((number,index) => number*b[index])
            .reduce((a,b) => a+b);
}