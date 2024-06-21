import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import axios from "axios";

import Card from './Card'

const Friends =()=> {

    const [ friends, setFriends ] = useState([])

    useEffect (()=> {

        const url = 'http://localhost:3005/api/friend'
        axios.get(url).then(res => setFriends(res.data))


    },[])

    // console.log(friends)

    const friendCards = friends.map(friend =>{
        return <Card 
                    key={friends.friend_id}
                    id={friends.friend_id}
                    name={friends.friend}
                    imgurl={friends.imgurl}
                    age={friends.age}
                    adjectives={friends.adjectives}
                    interests={friends.interests}
                    price={friends.price}

                />

    })

    return(
        <>
                <main className="main" id="friendsMain">
                    <div className="container">
                        <h2>friends</h2>
                        <div className="row row-cols-1 row=cols=md-5 g-4">
                            {friendCards}
                        </div>
                    </div>
                </main>
                
        
        </>
    )
}

export default Friends