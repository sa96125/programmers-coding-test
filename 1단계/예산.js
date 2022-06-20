function solution(d, budget) {
	let max = 0
    let total = 0
    
    d.sort((a,b) => a-b)

    for(i=0; i< d.length; i++) {
        total += d[i];
    	 if(total <= budget) {
             max += 1;
         }
    }

	return max
}