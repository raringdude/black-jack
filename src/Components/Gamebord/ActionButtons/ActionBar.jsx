import './actionbar.css';
const ActionBar = (props) =>{

    const playGame = () => {
        props.startGame();
    }

    return(
        <div className="action-bar">
           <button onClick={playGame} className="playButton">Play</button>
        </div>
    )
};

export default ActionBar;