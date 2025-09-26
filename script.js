let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let gameDraw=document.querySelector(".draw-game")
let count=0;

let turn0= true; //playerX ,player0;
const winPatterns=[
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [3,4,5],
            [6,7,8]    
];

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};
const resetGame= () =>{
    count=0;
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    gameDraw.classList.add("draw-game");

}
const gameIsDraw = (count) =>{
    if(count >=9){
        count=0;
        gameDraw.classList.remove("draw-game");
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn0){ //playerO
            box.style.color="green";
            box.innerText="X";
            turn0=false;
            count++;

        }else{ //player1
            box.innerText="O";
            box.style.color="#BC2C1A"
            turn0=true;
            count++;
        }
        box.disabled = true;
        checkWinner();
        gameIsDraw(count);

    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled= true;
    }
};

 const showWinner= (winner) =>{
        msg.innerText=`Congratulations ,Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
 }

const checkWinner= () =>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2Val !="" && pos3Val !=""){
            if(pos1val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



