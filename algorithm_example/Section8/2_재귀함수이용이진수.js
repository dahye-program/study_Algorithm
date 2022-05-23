// 10진수 N을 입력받아 재귀함수를 이용하여 2진수로 변환하여 출력

const solution = (N) => {
    let answer = "";
    function Recursive(N){
        if(N === 0) return;
        else{
            Recursive(parseInt(N/2));
            answer += String(N%2);
        }
    }
    Recursive(N);
    return answer;
}

console.log(solution(11));
