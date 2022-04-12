// 한 개의 회의실에서 n개의 회의들을 진행해야함
// 시작 시간과 끝나는 시간을 입력받아 각 회의들을 겹치지 않게 사용할 수 있는 최대 수 반환
// 회의는 한 번 시작하면 중간에 중단될 수 없고 하나의 회의가 끝나야만 다음 회의 시작 가능

const solution = (arr) => {
    let answer = 0;
    let end = 0;
    arr.sort((a, b)=>{
        if(a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    })
    for(let x of arr){
        if(x[0] >= end){
            answer++;
            end=x[1];
        }
    }
    return answer;
}

let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));
