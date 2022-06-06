// 집합을 두 개의 부분집합으로 나누었을 때 두 부분집합의 원소의 합이 같은 경우가 존재하면 "YES", 그렇지 않으면 "NO" 출력
// Ex) {1, 3, 5, 6, 7, 10} => {1, 3, 5, 7} = {6, 10}

const solution = (arr) => {
    let answer = "NO";
    let flag = 0;
    let total = arr.reduce((a, b) => a+b, 0);
    let n = arr.length;
    function DFS(L, sum){
        if(flag) return;
        if(L===n){
            if((total-sum)===sum){
                answer = "YES";
                flag = 1;
            }
        }
        else{
            DFS(L+1, sum+arr[L]);
            DFS(L+1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));