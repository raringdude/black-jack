import Card from './Card';

const PlayerHand = (props) =>{

    var total = props.card1[2] + props.card2[2];
    
    return(
        <div>
            <h1>Your Hand: {total}</h1>
        <div className='hand'>
            <Card value={props.card1[0]} suit={props.card1[1]}/>            
            <Card value={props.card2[0]} suit={props.card2[1]}/>
        </div>
        </div>
    )
};

export default PlayerHand;