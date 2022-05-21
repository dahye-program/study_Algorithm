// 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지 출력

const solution = (N) => {
    function Recursive(L){
        if(L==0) return;
        else{
            Recursive(L-1);
            console.log(L);
        }
    }
    Recursive(N);
}

solution(3);