function solution(d, m) {
    let answer = 0;
    let box=0;
    let cnt=1;
    for(let i=0; i<d.length; i++){
        answer+=1;
        if(cnt<=d[i]){
            box= box+cnt;
            cnt*=2;
        }else{
            cnt=1;
        }
        if(box>=m) break;
    }
    if(box>=m){
        return answer;
    }
    else return -1;
}

const d=[2, 2, 4, 3];
let m=8;

console.log(solution(d, m));
