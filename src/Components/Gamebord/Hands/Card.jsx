




const Card = (props) =>{
    return(
        <div className="card">
           <h3>{props.value}</h3>
           <p>of</p>
           <h3>{props.suit}</h3>
        </div>
    )
};

export default Card;