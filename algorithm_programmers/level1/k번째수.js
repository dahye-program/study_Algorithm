// 배열 arr => i번째 숫자부터 j번째 숫자까지 자르고 오름차순 정렬, k번째 수 구하기
// ex) arr=[1, 5, 2, 6, 3, 7, 4], i=2, j=5, k=3 => 5 리턴
// 입력값 배열, i/j/k 담긴 2차원 배열

const result = (arr, commands) => {
    let ans = [];
    let array = [];

    for(let i=0; i<commands.length-1; i++){
        for(let j=0; j<=0; j++){
            array = arr.slice((commands[i][j]-1), (commands[i][j+1]+1));
            console.log(array);
            array=array.sort();
            ans.push(array[(commands[i][j+2])-1]);
        }
    }
    return ans;
}

const arr = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(result(arr, commands));