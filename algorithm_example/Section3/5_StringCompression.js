// 같은 문자가 연속으로 출력되는 경우 문자와 중복 횟수 출력

const solution = (str) => {
    let answer = "";
    let cnt = 1;
    str = str + " ";
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) cnt++;
        else {
            answer += str[i];
            if (cnt > 1) answer += String(cnt);
            cnt = 1;
        }
    }
    return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));