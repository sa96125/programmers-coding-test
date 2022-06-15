class Cart {
    constructor() {
        this.items = [];
        this.score = 0;
    }
  
    push(item) {
        if(this.items.length === 0){
            this.items.push(item);
            return ;
        }
  
        if(this.items[this.items.length-1] === item){
            this.items.pop();
            this.score++;
        } else {
            this.items.push(item);
        }
    }
  
    getScore() {
        return this.score * 2;
    }
  }
  
  
  
  function solution(board, moves) {
  
    let cart = new Cart();
  
    for(let move of moves) {
        for(let i=0; i < board.length; i++) {   
  
            if(board[i][move - 1] !== 0) {
                cart.push(board[i][move - 1]);
                board[i][move - 1] = 0;
                break;
            }
        }
    }
  
    return cart.getScore();
  }
  
  
  // * 노트
  // 적절한 자료구조를 사용.
  // 정규 표현식으로 같은 문자를 처리하는 빠르게 방법으로 하려하였으나 잦은 형변환 문제로 그냥 스택을 사용
  // 로직이 너무 읽기 불편해서 클래스로 뺏음!
  // 반환값을 정확하게 나오지 않을 경우 생각하기보다 놓친것이 없는지 문제를 다시 본다.