function solution(s) {
    let answer = '';
    let tmp='';
    answer=s.split('');
    for(let i=0; i<answer.length-1; i++){
        for(let j=0; j<answer.length-1; j++){
            if(answer[j].charCodeAt()<answer[j+1].charCodeAt()){
                tmp=answer[j];
                answer[j]=answer[j+1];
                answer[j+1]=tmp;
            }
        }
    }
    answer=answer.join('');
    return answer;
}