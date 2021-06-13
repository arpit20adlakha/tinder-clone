/** @jsx React.DOM */
import React from "react";
import "./Chats.css";
import Chat from "./Chat"

function Chats() {
    return(
        <div className="chats">
            <Chat
            name="Mark"
            message="Hey! How are you?"
            timestamp="40 seconds ago"
            profilePic = "..." />
            <Chat
                name="Arpit"
                message="Whats up ?"
                timestamp="30 seconds ago"
                profilePic = "https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/p960x960/117411674_3071504492897135_521212679289573870_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=vU74FSQIwmEAX88zqLm&_nc_ht=scontent.fblr1-4.fna&tp=6&oh=37a1f65100379849a7e086dc9e697c51&oe=5F814450" />
            <Chat
                name="Jean"
                message="Ola !!"
                timestamp="3 days ago"
                profilePic = "..." />
            <Chat
                name="Poonam"
                message="Yo whats up"
                timestamp="1 week ago"
                profilePic = "https://scontent.fblr1-3.fna.fbcdn.net/v/t31.0-8/p960x960/21768614_1781951555179006_3081378396254504956_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=jVKxI4zaPGAAX-ehqkm&_nc_ht=scontent.fblr1-3.fna&tp=6&oh=9e529c90405a2beafaf775c24251927a&oe=5F7E8B05" />
        </div>
    )

}

export default Chats;