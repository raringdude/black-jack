import React from "react";
import { useState } from "react";
import { cardData } from "./Hands/deckOfCards";
import './gameboard.css';
import Hands from './Hands/Hands';
import ActionBar from "./ActionButtons/ActionBar";



const GameBoard = () => {

    let numberOfPlayers = 2;
    let numberOfCards = numberOfPlayers *2;
    let cardNumberAndSuitArry = []
    let cardArryHands = [];
    let cardNumberValue = 0;
    
    const[win, setWin] = useState('tie');
    
    
    const[cardArray, setCardArray] = useState([['', ''], ['', ''], ['', ''], ['', '']]); 


    //After the play button is clicked
    const startGame = () => {

        

       
        
        cardNumberValue = 0;

        for(var i=0; i < numberOfCards ; i++){
            var randomNumber =  Math.floor(Math.random() * (51 - 0 + 1)) + 0;

            cardNumberAndSuitArry.push(cardData[randomNumber].value);
            cardNumberAndSuitArry.push(cardData[randomNumber].suit);

            if(cardData[randomNumber].value === 'A'){
                cardNumberValue = 11;
            }
            else if(!Number.isInteger(cardData[randomNumber].value)){
                cardNumberValue = 10;
            }else{
                cardNumberValue = cardData[randomNumber].value;
            }

            cardNumberAndSuitArry.push(cardNumberValue); 
            cardArryHands.push(cardNumberAndSuitArry);
            cardNumberAndSuitArry = [];                      
        }
        
        var playersHand = cardArryHands[0][2] + cardArryHands[2][2];
        var dealerHand = cardArryHands[1][2] + cardArryHands[3][2]


        setCardArray(cardArryHands);

        if(playersHand > dealerHand){            
           console.log("win")
        }else{
            console.log("loss")
        }
        console.log('Players Hand :' + playersHand);
        console.log('Dealers Hand: ' + dealerHand);

        
        

        



    }

    return(
    <div className="container game-board">
        <Hands cards={cardArray}/>
        <ActionBar startGame={startGame}/>
    </div>
    )
}

export default GameBoard;