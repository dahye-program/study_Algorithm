// 투표한 문자열 입력받아 학급회장 투표

const solution = (str) => {
    let answer;
    let Hs = new Map();
    for(let x of str){
        if(Hs.has(x)) Hs.set(x, Hs.get(x)+1);
        else Hs.set(x, 1);
    }
    let max = Number.MIN_SAFE_INTEGER;
    for(let [key, val] of Hs){
        if(val>max){
            max=val;
            answer=key;
        }
    }
    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
