// N개의 숫자 입력받아 정렬
// 음의 정수는 앞부분, 양의 정수는 뒷부분 (양의 전수와 음의정수 안에서의 순서는 변함 X)
// 정렬 방법은 버블 정렬

const solution = (arr) => {
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j]>0 && arr[j+1]<0){ // j가 양수, j+1이 음수일 경우 swap
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));