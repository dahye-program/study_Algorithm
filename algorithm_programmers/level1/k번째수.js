// 배열 arr => i번째 숫자부터 j번째 숫자까지 자르고 오름차순 정렬, k번째 수 구하기
// ex) arr=[1, 5, 2, 6, 3, 7, 4], i=2, j=5, k=3 => 5 리턴
// 입력값 배열, i/j/k 담긴 2차원 배열

const solution = (arr, commands) => {
    let ans = [];
    let tmp = [];

    for(let i=0; i<commands.length; i++){
        tmp = arr.slice((commands[i][0]-1), (commands[i][1]));
        tmp.sort((a,b) => a-b);
        ans.push(tmp[(commands[i][2])-1]);
    }
    return ans;
}