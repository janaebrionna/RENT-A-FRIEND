import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Card from './Card'



const Home =()=> {

    const [ friend, setFriend ] = useState({})
    const params = useParams()
    let index = Math.floor(Math.random()*9)

    useEffect (()=> {

        const url = `http://localhost:3005/api/friend/${index}`

        axios.get(url).then(res => setFriend(res.data))
    },[])
    
// console.log(friend)

    return(
        <>
        
        <main className="main" id="singleMain">
            <div className="container">
                <h2 className="text-center home-subheading text-capitalize">{friend.friend}</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <figure className="figure">
                            <img className="img img-fluid figure-img" src={`/images/${friend.imgurl}`} alt={friend.friend} />
                            <figcaption className="figure-caption">
                                <p className="text friend-text home-text group-item">interests: {friend.interests}</p>
                                <p className="text friend-text home-text group-item">adjectives: {friend.adjectives}</p>
                                <p className="text friend-text home-text group-item">Age: {friend.age}</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                
            </div>
        </main>
        </>
    )
}

export default Home