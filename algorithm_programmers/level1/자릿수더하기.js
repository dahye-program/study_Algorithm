// 자연수 N의 각 자릿수의 합 리턴
const solution = (n) => {
    let answer = 0;
    let arr = [];
    n = n.toString();
    arr = n.split('');
    for(let i=0; i<n.length; i++){
        answer = answer + Number(arr[i]);
    }
    return answer;
}

console.log(solution(987));