// N개의 숫자 입력받아 오름차순 정렬하여 출력
// 정렬 방법은 삽입 정렬
// 2번째 원소부터 시작하여 앞의 원소들과 비교하여 삽입할 위치를 찾고 옮기는 정렬 방법

const solution = (arr) => {
    let answer=[];
    answer.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        for(let j=0; j<answer.length; j++){
            if(arr[i]<answer[j]){
                answer.splice(j, 0, arr[i]);
                break;
            }
        }
    }
    return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));