// 수열에서 연속부분수열의 합이 n 이하가 되는 경우가 몇번인지 출력

const solution = (n, arr) => {
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for(let rt = 0; rt<arr.length; rt++){
        sum += arr[rt];
        while(sum>n){
            sum -= arr[lt++];
        }
        answer += (rt-lt+1);
    }
    return answer;
}

let arr = [1, 3, 1, 2, 3];
console.log(solution(5, arr));
