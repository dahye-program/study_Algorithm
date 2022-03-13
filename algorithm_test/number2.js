// < 왼쪽으로 1, > 오른쪽으로 1

// const solution = (p) => {
//     let answer = [];
//     let length = 0;
//     for(let i=0; i<p.length; i++){
//         if(p[i] === '>'){
//             if(p[i+1] === '<'){
//                 answer.push(i);
//             }
//         }
//     }
//     length=answer.length-1;
//     let tmp=(p.split('').splice(answer[0], answer[length]-answer[0]+2).join(''));
//     p=p.replace(tmp, '');
//     return p.length;
// }

const solution = (p) => {
    while(p.indexOf("><") !== -1) {
        p = p.replace('><', '');
    }
    return p.length
}

console.log(solution("<<<><><><<><><<>"));