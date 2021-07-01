function solution(n) {
    let answer = [];
    answer=String(n);
    answer=answer.split('').reverse();
    for(let i=0; i<answer.length; i++){
        answer[i]=Number(answer[i]);
    }
    return answer;
}