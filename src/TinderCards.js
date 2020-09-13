import React, {useEffect, useState} from 'react';
import TinderCard  from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css"

function TinderCards() {
    const [people, setPeople]  = useState([]);

    useEffect(() => {
        const unsubscribe = database.collection('people').onSnapshot(snapshot => {
                setPeople(snapshot.docs.map(doc => doc.data()));
            }
        )
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div>
        <div className="tinderCards__cardContainer">
            {people.map((person) => (
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