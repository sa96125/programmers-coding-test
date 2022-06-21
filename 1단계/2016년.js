const dayOfTheWeek = ['THU', 'FRI', 'SAT','SUN','MON','TUE','WED']

const isOdd = num => (num % 2) !== 0 ? true : false

const getNumberOfDays = (a , b) =>{
    let total = b
    
    for(let i = 1; i < a; i++) {
        if(isOdd(i)) {
            if( i < 8 ) {
                total += 31
            } else {
                total += 30
            }
        } else {
            if( i < 8 ) {
                total += i === 2 ? 29 : 30
            } else {
                total += 31
            }
        } 
    }

    return total
} 


function solution(a, b) {
    return dayOfTheWeek[getNumberOfDays(a,b)%7];
}