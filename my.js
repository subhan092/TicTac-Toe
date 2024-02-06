let boxes =document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector(".new-btn");
let msgcon = document.querySelector(".msg-containr");
let Wmsg = document.querySelector("#msg");

let turn0 = true;

const winPatern = [
 [0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,4,6],
[2,5,8],
[3,4,5],
[6,7,8]
];

const resetGame = ()=>{
    turn0 =true;
    enablebox();
    msgcon.classList.add("hide");
}

boxes.forEach(  (box)=> {
    box.addEventListener("click", ()=>{
        if(turn0 ){
            // player 0
            box.innerText= "0";
            turn0=false;
        }
        else{
            // player x
          box.innerText="X";
          turn0=true;
        }
        box.disabled = true;
      
    checkWinner();
    })

    
});

const enablebox  = () =>{
    for(let box of boxes){
        box.disabled  = false;
        box.innerText = "";
    }
}

const disableboxses  = ()  =>{
    for(let box of boxes){
        box.disabled  = true;
    }
}
const showWinner = (winner)=>{
     Wmsg.innerText = `Congratulations , Winner is ${winner}`;
     msgcon.classList.remove("hide");
     disableboxses();
}

const checkWinner = () =>{
       for(let pattern of winPatern){{{{
           let posVal0  = boxes[pattern[0]].innerText;
           let posVal1= boxes [pattern[1]].innerText;
           let posVal2 = boxes [pattern[2]].innerText;

           if (posVal0 != "" && posVal1!= "" && posVal2 !="") {
            if (posVal0 === posVal1 && posVal1 === posVal2) {
                console.log("Winner",posVal0);
                    showWinner(posVal0);
            }
           }
       }}}}
}

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
