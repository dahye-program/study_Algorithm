function solution(a, b) {
    let answer = 0;
    if(a<b){
        for(let i=0; i<=b-a; i++){
            answer+=a+i;
        }
    }
    else if(a>b){
        for(let i=0; i<=a-b; i++){
            answer+=b+i;
        }
    }else answer=a;

    return answer;
}