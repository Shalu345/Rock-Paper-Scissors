
const buttelement=document.querySelectorAll('button')
const reselement=document.getElementById('result');

const userconstelement=document.getElementById('User-score');
const computerscoreele=document.getElementById('Comp-score');
let userScore=0;
let computerscore=0;

buttelement.forEach((btn)=>{
btn.addEventListener('click',()=>{
    // console.log("you clicked on ",btn.id);
    // console.log("Computer Choices", compChoice());
    const Result=PlayRound(btn.id,compChoice());
    // console.log(Result);
    reselement.innerText=Result;
})
})

function compChoice(){
    const Choices=["rock","paper","scissors"];
  const RandomChoices=  Math.floor(Math.random()*Choices.length);
  console.log(RandomChoices);
  return Choices[RandomChoices];

}

function PlayRound(userSelection, compSelection){
 
    if(userSelection===compSelection){
        // console.log("game is tie");
        return `Game is Tie`
    }
    else if(
        userSelection==="rock"&& compSelection==="scissors"||
        userSelection==="paper"&& compSelection==="rock"||
        userSelection==="scissors"&& compSelection==="paper"

    ){
        userScore++
        userconstelement.innerText=userScore;
        return`you won! ${userSelection} beats the userselection from computer selection ${compSelection}`
    }
    
      else {
        computerscore++
        computerscoreele.innerText=computerscore;
        return`you losse!${compSelection} beats the computerselection to userselection ${userSelection}`
      } 
}