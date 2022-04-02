// 필수 과목이 주어지고, 시간표가 주어졌을 때 올바른 수업 설계인지 구하기
// 필수 과목은 순서대로 이수해야함

const solution = (Essential, Class) => {
    let answer = "YES";
    let queue = Essential.split('');
    for(let x of Class){
        if(queue.includes(x)){
            if(x!==queue.shift()) return "NO";
        }
    }
    if(queue.length>0) return "NO";
    return answer;
}

console.log(solution("CBA", "CBDAGE"));