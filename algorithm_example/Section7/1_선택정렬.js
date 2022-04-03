// N개의 숫자 입력받아 오름차순 정렬하여 출력
// 정렬 방법은 선택 정렬
// 선택 정렬은 배열에서 해당 자리를 이미 선택하고 그 자리에 오는 값을 찾는 방법
// 선택 정렬 시간 복잡도 : O(n^2)

 const solution = (arr) => {
     for(let i=0; i<arr.length - 1; i++){
         let index=i;
         for(let j=i+1; j<arr.length; j++){
             if(arr[j]<arr[index]) index=j;
         }
         [arr[i], arr[index]] = [arr[index], arr[i]];
     }
     return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));