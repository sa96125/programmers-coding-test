// * 의사코드
// * 신고한 사람 목록 만들기.(신고자는 한 유저의 중복 신고 불가. 2회 이상 -> 1회)
// * 신고 당한 유저의 신고된 횟수 데이터 필요.
// * K번 이상 신고 당한 유저 목록 필요.
// * 신고 당한 횟수가 k번 이상인 유저가 신고한 유저 목록에 포함되면 메일 발송
// * 출력값은 유저리스트의 순서대로 메일 카운트를 담은 배열.

const setReport = (report) => {

    const newReport = {}
    
   	for(item of report) {
        const [reporter, reportedUser]= item.split(' ')

        if(!newReport[reporter]) {
            newReport[reporter] = [reportedUser]
        } 
        else {
            newReport[reporter].push(reportedUser)
        }
    }

    return newReport
}


const getReportedUsers = report => {

    const map = {}

    for(userList of Object.values(report)) {
        for(user of userList) {
            if(!map[user]) {
                map[user] = 1;
            } else {
                map[user] += 1;
            }
        }
    }

    return map
}


const filterOverReportedUsers = (users, k) => {

    const blackList = []
    
    for(let [key, value] of Object.entries(users)) {
        if(value >= k) {
            blackList.push(key)
        }
    }

    return blackList
}


const countMail = (reporter, blackList) => {
    let mail = 0

    if(!reporter) return 0;
    for(person of reporter) {
           if(blackList.includes(person)) {
               mail += 1;
           }
       }
    return mail
}


function solution(id_list, report, k) {
    
    const reporters = setReport([...new Set(report)])
    const reportedUsers = getReportedUsers(reporters)
    const blackList = filterOverReportedUsers(reportedUsers, k)
    return id_list.map(id => countMail(reporters[id], blackList))

}