function solution(n, arr1, arr2) {
    return  arr1.map((el, i) => {
        (el | arr2[i]).toString(2)
                      .padStart(n,0)
                      .replace(/1/gi, '#')
                      .replace(/0/gi, ' ')
    })
  }
  
  
  
  
  // * 노트
  // 연산이 이루어지고 앞자리가 0일 경우 그 숫자는 표현하지 않는다.
  // 자릿수를 채워야하는 경우, padStart/padEnd를 사용한다. 이전에 repeat으로 글씨를 채웠던 경험이 있는데 꼭 숙지하도록 하자.