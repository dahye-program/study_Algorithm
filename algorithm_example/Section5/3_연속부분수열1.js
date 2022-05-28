// 수열에서 연속부분수열의 합이 n이 되는 경우가 몇번인지 출력

const solution = (n, arr) => {
    let answer = 0;
    let lt = 0;
    let sum = 0;
    for(let rt=0; rt<arr.length; rt++){
        sum += arr[rt];
        if(sum === n) answer++;
        while(sum >= n){
            sum -= arr[lt++];
            if(sum === n) answer++;
        }
    }
    return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));
