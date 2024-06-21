const Card =(props)=> {
    console.log(props)

    return(
        <>

        <div className="col">
            <div className="card">
                <img src={`/media/${props.imgurl}`} alt={props.friend} className="img-fluid image card-img-top/>"/>
            </div>
            <div className="card-body">
                <h3 className="card-title">{props.friends}</h3>
            </div>
        </div>
        
        </>
    )
}

export default Card