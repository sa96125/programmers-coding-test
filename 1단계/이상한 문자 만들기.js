const parseWeird = str => {
  return [...str].map((char, index) => (index+1) % 2 !== 0 ? char.toUpperCase() : char.toLowerCase() ).join("")
}

function solution(s) {
  return s.split(" ")
          .map(parseWeird)
          .join(" ")
}