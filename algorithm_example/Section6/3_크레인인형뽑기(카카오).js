// board 배열은 2차원 배열로 인형뽑기배열 ( 5x5 이상 30x30 이하)
// moves는 인형을 뽑는 이동 배열 1, 5, 3 => 1열의 맨 위 인형 뽑고 5열의 맨 위 인형 뽑고 3열의 인형 뽑는 것을 나타냄
// 0은 인형이 없다는 뜻, 1~100까지 숫자는 다른 인형을, 같은 숫자는 같은 인형을 의미
// 뽑아서 바구니에 담았을 때 같은 인형이면 인형은 소멸됨
// 소멸되는 인형의 개수 구하기

const solution = (board, moves) => {
    let answer = 0;
    let stack = [];
    moves.forEach(position => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][position - 1] !== 0) {
                let doll = board[i][position - 1];
                board[i][position - 1] = 0;
                if (doll === stack[stack.length - 1]) {
                    stack.pop();
                    answer += 2;
                } else stack.push(doll);
                break;
            }
        }
    })
    return answer;
}

let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));