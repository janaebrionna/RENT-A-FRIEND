import { Link } from "react-router-dom"

Link

const Card =(props)=> {
    console.log(props)

    return(
        <>

        <div className="col">
            <div className="card">
                    <img src={`/images/${props.imgurl}`} alt={props.friend} className="img-fluid image card-img-top/>"/> 
            </div>
            <div className="card-body">
                <Link to={`/friends/${props.id}`}className={"friend-link"}>
                    <h3 className="card-title">{props.name}</h3> 
                </Link>
                    <p className="card-text">{props.age}</p>
            </div>
            
        </div>
        
        </>
    )
}

export default Card