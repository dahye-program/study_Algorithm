// 좌표(x, y)를 입력받아 오름차순으로 정렬
// 정렬 기준은 x값에 의해 정렬, x값이 같을 경우 y값에 의해 정렬

const solution = (arr) => {
    arr.sort((a, b)=>{
        if(a[0]===b[0]) return a[1]-b[1];
        else return a[0]-b[0];
    });
    return arr;
}

let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));
