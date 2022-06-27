const toAsci = str => str.charCodeAt()
const toChar = num => String.fromCharCode(num)

function solution(s, n) {
    return [...s].map(char => {
        if(char === ' ') return ' '
        
        if( toAsci(char) <= 90 && toAsci(char) + n > 90) {
            return toChar((toAsci(char) + n) % 90 + 64)
        } else if (toAsci(char) + n > 122) {
            return toChar((toAsci(char) + n) % 122 + 96)
        } else {
            return toChar(toAsci(char) + n)        
        }
            
    }).join('')
}

//A-Z : 65 ~ 90
//a-z : 97 ~ 122