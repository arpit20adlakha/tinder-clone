import React from 'react';
import TinderCard  from "react-tinder-card";
// import database from "./firebase";
import "./TinderCards.css"

const peopleLocal = [
    {
        name: "Rachel",
        url: "/tinder-clone/rachel.jpeg"

    },
    {
        name: "Arpit",
        url: "https://avatars1.githubusercontent.com/u/16517873?v=4"
    },
    {
        name: "Poonam",
        url: "poonam_soni.jpeg"
    },
    {
        name: "Emily",
        url: "emily.jpeg"
    },
    {
        name: "Monica",
        url: "monica.jpeg"
    },
    {
        name: "Phoebe",
        url: "pheoebe.jpeg"
    },
    {
        name: "Rachel",
        url: "rachel.jpeg"
    },
    {
        name: "Joey",
        url: "Joey.jpeg"
    },
    {
        name: "Chandler",
        url: "chandler.jpeg"
    }


]

function TinderCards() {
//     const [people, setPeople]  = useState([]);

//     useEffect(() => {
//         const unsubscribe = database.collection('people').onSnapshot(snapshot => {
//                 setPeople(snapshot.docs.map(doc => doc.data()));
//             }
//         )
//         return () => {
//             unsubscribe();
//         }
//     }, [])

    return (
        <div>
        <div className="tinderCards__cardContainer">
            {peopleLocal.map((person) => (
                <TinderCard className="swipe"
                            key={person.name} preventSwipe={['up', 'down']}>
                    <div className="card"
                        style={{backgroundImage: `url(${person.url})`}} >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
        </div>
    )
}
export default TinderCards;
