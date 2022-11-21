import React from "react";
import './hands.css';
import DealerHand from './DealerHand';
import PlayerHand from './PlayerHand';

const Hands = (props) =>{
   

    return(
        <div className="handArea">
            <DealerHand card1={props.cards[1]} card2={props.cards[3]}/>
            <PlayerHand card1={props.cards[0]} card2={props.cards[2]}/>
        </div>
    )
};

export default Hands;