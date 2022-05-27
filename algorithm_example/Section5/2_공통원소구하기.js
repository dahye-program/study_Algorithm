// 두 배열 입력 받아 공통 원소 오름차순으로 출력
// 배열(집합)의 크기 1 <= N <= 30000
// 원소 중복 X

const solution = (arr1, arr2) => {
    let answer = [];
    arr1.sort();
    arr2.sort();
    let p1 = p2 = 0;
    while(p1 < arr1.length && p2 < arr2.length){
        if(arr1[p1] === arr2[p2]) {
            answer.push(arr1[p1++]);
            p2++;
        }else if(arr1[p1] < arr2[p2]) p1++;
        else p2++;
    }
    return answer;
}

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));