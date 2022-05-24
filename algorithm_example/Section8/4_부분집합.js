// 부분집합 구하기(DFS 이용)
// 자연수 N(1<=N<=10)을 입력받아 1부터 N까지의 원소를 갖는 집합의 부분집합 출력

const solution = (N) => {
    let answer=[];
    let arr=Array.from({length:N+1}, ()=>0);
    function DFS(L){
        if(L===N+1){
            let tmp="";
            for(let i=1; i<=N; i++){
                if(arr[i]===1) tmp+=(i+", ");
            }
            if(tmp.length>0) answer.push(tmp.trim());
        }
        else{
            arr[L]=1;
            DFS(L+1);
            arr[L]=0;
            DFS(L+1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3));
