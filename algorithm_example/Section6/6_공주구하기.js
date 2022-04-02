// 1~n 숫자를 부여 받은 왕자들
// 1번부터 시계방향으로 k번째 왕자가 빠지게 됨(빠진 왕자 다음부터 다시 1 부여)
// 공주를 구하는 왕자는 마지막에 남게 되는 왕자
// 마지막 남은 왕자 반환

const solution = (n, k) => {
    let answer;
    let queue=Array.from({length:n}, (v, i)=>i+1);
    while(queue.length){
        for(let i=1; i<k; i++) {
            queue.push(queue.shift());
        }
        queue.shift();
        if(queue.length===1) {
            answer=queue.shift();
        }
    }
    return answer;
}

console.log(solution(8, 3));