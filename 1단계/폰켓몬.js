function solution(nums) {
    const max = nums.length/2;
     const poketmons = new Set(nums)
    return [...poketmons].length < max ? [...poketmons].length : max
}