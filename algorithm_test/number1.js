// 문자열 특정 구간 뒤집기
// 주어진 배열 값대로 차례로 뒤집어 최종 문자열 반환
const solution = (S, interval) => {
    let answer = "";
    let i, j=0;
    let tmp="";
    for(i=0; i<interval.length; i++){
        answer=S.slice(interval[i][j]-1, interval[i][j+1]);
        tmp=answer;
        answer=answer.split("").reverse().join('');
        S=S.replace(tmp,answer);
    }
    return S;
}

console.log(solution("abcde", [[4,5], [1,2], [3,3]]));