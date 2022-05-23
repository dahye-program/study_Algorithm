// 이진트리 순회(깊이우선탐색)
//    1
//  2   3
// 4 5 6 7

const solution = (N) => {
    let answer="";
    function DFS(V){
        if(V>7) return;
        else{
            answer+=(V+' ');
            DFS(V*2);
            DFS(V*2+1);
        }
    }
    DFS(N);
    return answer;
}

console.log(solution(1));
