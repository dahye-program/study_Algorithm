// 소괄호 () 사이의 문자 제거 한 문자열 반환

const solution = (s) => {
    let answer;
    let stack=[];
    for(let x of s){
        if(x===')'){
            while(stack.pop()!=='(');
        }
        else stack.push(x);
    }
    answer=stack.join('');
    return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));