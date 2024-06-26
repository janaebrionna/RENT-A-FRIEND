import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Card from './Card'

const Single =()=> {

    const [ friend, setFriend ] = useState({})
    const params = useParams()


    useEffect (()=> {

        const url = `http://localhost:3005/api/friend/${params.id}`

        axios.get(url).then(res => setFriend(res.data))
    },[])
    
    console.log(friend)

    return(

        <main className="main" id="singleMain">
            <div className="container">
                <h2>{friend.friend}</h2>
                <div className="row">
                    <div className="col-md-6">
                        <figure className="figure">
                            <img className="img img-fluid figure-img" src={`/images/${friend.imgurl}`} alt={friend.friend} />
                            <figcaption className="figure-caption">{friend.friend}</figcaption>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Age: {friend.age}</li>
                        </ul>
                    </div>
                </div>
                
                <p>interests: {friend.interests}</p>
                <p>adjectives: {friend.adjectives}</p>
            </div>
        </main>
    )
}

export default Single