// * 수도코드
// * 0을 제외한 번호리스트 필요.
// * 당첨번호 갯수 확인
// * 0의 갯수 n 만큼  당첨 번호 갯수 + n, 최저순위 당첨번호 갯수
// * 등수 최고순위 7 - 당첨 번호 갯수 + n, 최저순위 7 - 당첨번호 갯수
// * 당첨 번호 갯수 + n < 2 ? 0 : 최고순위 , 당첨번호 갯수 < 2 ? 0 : 최저순위
// * 반환값 [최고 순위, 최저 순위]


function solution(lottos, win_nums) { 
    
    const myLottos = lottos.filter(lotto => lotto !== 0)
    const winLottos = myLottos.filter(lotto => win_nums.includes(lotto))
    const zeros = 6 - myLottos.length
    
    const maxRank = winLottos.length + zeros < 2 ? 6 : 7 - (winLottos.length + zeros)
    const minRank = winLottos.length < 2 ? 6 : 7 - (winLottos.length)
    
    return [maxRank, minRank]
    
}