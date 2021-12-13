// 괄호 입력받아서 올바른 괄호이면 'YES', 틀린 괄호이면 'NO' 출력

const solution = (s) => {
    let answer="YES";
    stack=[];
    for(let x of s){
        if(x==='(') stack.push(x);
        else{
            if(stack.length===0) return "NO";
            stack.pop();
        }
    }
    if(stack.length>0) return "NO";
    return answer;
}

let b="(()(()))(()";
console.log(solution(b));