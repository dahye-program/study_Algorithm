// Kim 위치 x 찾아서 반환 (반환타입 : 김서방은 x에 있다)
const solution = (seoul) => {
    let answer = '';
    for(let i = 0 ; i<seoul.length; i++){
        if(seoul[i] === 'Kim') answer = `김서방은 ${i}에 있다`;
    }
    return answer;
}

console.log(solution(["Jane", "Kim"]));
