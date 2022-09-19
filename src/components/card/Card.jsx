import "./card.css"

function Cards(props) {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={props.img} alt=""/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.text}</p>
                </div>
        </div>
    )
}
export default Cards