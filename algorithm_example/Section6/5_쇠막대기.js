// 레이저로 쇠막대기 절단
// 레이저는 ()가 연속으로 나오는 경우
// 쇠막대기는 (로 시작하여 )로 표현
// 레이저로 절단된 쇠막대기 조각들의 개수 반환

const solution = (str) => {
    let answer = 0;
    let stack = [];
    for(let i=0; i<str.length; i++){
        if(str[i]==='(') stack.push('(');
        else{
            stack.pop();
            if(str[i-1]==='(') answer+=stack.length;
            else answer++;
        }
    }
    return answer;
}

console.log(solution("(((()(()()))(())()))(()())"));
