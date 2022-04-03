// N개의 숫자 입력받아 오름차순 정렬하여 출력
// 정렬 방법은 버블 정렬
// 버블 정렬은 두 인접한 요소를 검사하여 정렬, 인접한 두 수를 비교하여 큰 수를 뒤로
// 버블 정렬 시간 복잡도 : O(n^2)

const solution = (arr) => {
    for (let i=0; i<arr.length-1; i++) {
        for (let j=0; j<arr.length-1-i; j++) {
            if (arr[j+1] < arr[j]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));