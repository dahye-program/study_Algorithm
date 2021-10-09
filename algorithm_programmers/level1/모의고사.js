
const result = (answer) => {
    let ans = [];
    let s1 = 0, s2 = 0, s3 = 0;
    let num1 = [1, 2, 3, 4, 5];
    let num2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    for(let i = 0 ; i< answer.length; i++){
        if(answer[i] === num1[i%5]) s1+=1;
        if(answer[i] === num2[i%8]) s2+=1;
        if(answer[i] === num3[i%10]) s3+=1;
    }

    if(s1>=s2 && s1>=s3){
        if(s1!==0) ans.push(1);
        if(s2>=s3 && s2!==0){
            ans.push(2);
        }
        if(s3!==0) ans.push(3);
    }
    else if(s2>=s1 &&s2>=s3){
        if(s2!==0) ans.push(2);
        if(s1>=s3&&s1!==0){
            ans.push(1);
        }
        if(s3!==0) ans.push(3);
    }
    else{
        if(s3!==0) ans.push(3);
        if(s1>=s2 && s1!==0){
            ans.push(1);
        }
        if(s2!==0) ans.push(2);
    }

    ans.sort();
    return ans;
}

const answers = [1, 2, 3, 4, 5, 4, 3, 2, 1 ];
console.log(result(answers));