
let cards=[];
let sum=0;
let hasBlackjack=false;
let isAlive =false;
let message="";

let messageEl=document.getElementById("message-el");
//let sumEl=document.getElementById("sum-el");
let sumEl=document.querySelector(".sum-el"); 
let cardsEl=document.querySelector("#cards-el");
let player={
    Name:"Sidhartha",
    Chips:145,
    sayHello:function(){
        console.log("hey player");
    }
}

player.sayHello();

let playerEl=document.querySelector("#player-el");
playerEl.textContent=player.Name+":$"+player.Chips;

function getRandomCard(){
    //floor to remove the decimal and convert to int
    //we added here 1 becoz random start from 0 but we want to start if from 1 to 13 
    //so we have added 1 
    let randomNumber=Math.floor(Math.random()*13)+1;
    //aces value is 11 in blackjack
    //and j k q values are 10 in black jack
    if(randomNumber===1){
        return 11;
    }
    else if(randomNumber>10){
        return 10;
    }
    else{
        return randomNumber;
    }
}

function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}

function allCards(){
    let all="";
    for(let  i=0;i<cards.length;i++){
        all+="  "+cards[i];
    }
    return all;
}

function renderGame(){
    cardsEl.textContent="Cards: " + allCards(); 
    sumEl.textContent="Sum:" +sum;
    if(sum<21){
        message="You are in game ... Do you want to draw other card?";
    }
    else if(sum===21){
        message="Awesome, You won the blackjack!!";
        hasBlackjack=true;
    }
    else{
        message="Sorry , You are out of game "; 
        isAlive=false;   
    }
    messageEl.textContent=message;
}


function newCard(){
    //only new card to be taken after start game and it is still alive in game not getting black jack win 
    if(isAlive===true && hasBlackjack===false){
        let card=getRandomCard();
        cards.push(card);
        sum+=card;
        renderGame();
    }
}

