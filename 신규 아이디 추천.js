// 문자열 소문자 변경
// 문자열 치환 -> 특정 문자 제거
// 문자열 치환 -> 중복 . 문자 제거
// 문자열 치환 -> . 문자 처음과 끝 제거
// 문자열 치환 -> 빈 문자열 a 대입
// 문자열 자르기 -> 0 ~ 15
// 문자열 치환 -> . 문자 끝 제거
// 문자열 추가 -> 길이 2이하 일 경우, 마지막 문자를 길이가 3될때까지 추가.


function solution(new_id) {
    const id = new_id
    	.toLowerCase()
    	.replace(/[^a-z0-9-_.]/g, '')
    	.replace(/\.{2,}/g,'.')
    	.replace(/^\.|\.$/g,'')
    	.replace(/^$/g,'a')
    	.slice(0,15)
    	.replace(/\.$/g,'')
    
    return id.length <= 2
    	? id + id.charAt(id.length-1).repeat(3 - id.length)
    	: id
}