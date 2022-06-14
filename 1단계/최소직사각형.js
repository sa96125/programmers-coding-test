// * 수도코드
// * 다 눕힌다.
// * 반환값 최대 가로, 세로값을 곱해 반환한다.


const lotate = ([a,b]) => b > a ? [b , a] : [a, b]
const maxSize = (pre, cur) => [pre[0] > cur[0] ? pre[0]: cur[0], pre[1] > cur[1] ? pre[1]: cur[1]]

function solution(sizes) {
    const [ w, h ] = sizes.map(lotate).reduce(maxSize)
    return w * h
}