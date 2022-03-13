// k개씩 연속으로 더한 값들 중 가장 큰 값 구하기
const solution = (estimates, k) => {
    let answer = 0;
    let i, j = 0;
    let sum= 0;
    for(i=0; i<estimates.length-k+1; i++){
        for(j=i; j<k+i; j++){
            sum += estimates[j];
        }
        if(answer < sum ) answer=sum;
        sum=0;
    }
    return answer;
}

console.log(solution([5, 1, 9, 8, 10, 5], 3));
