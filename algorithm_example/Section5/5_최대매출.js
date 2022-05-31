// 연속 n 만큼의 최대합 출력

const solution = (n, arr) => {
    let answer = 0;
    let sum = 0;
    for(let i=0; i<n; i++){
        sum+=arr[i];
    }
    answer = sum;
    for(let i=n; i<arr.length; i++){
        sum+=(arr[i]-arr[i-n]);
        console.log(sum, answer);
        answer = Math.max(answer, sum);
    }

    return answer;
}

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, arr));