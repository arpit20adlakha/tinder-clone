import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: 'Arpit',
            image: 'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/p960x960/117411674_3071504492897135_521212679289573870_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=vU74FSQIwmEAX88zqLm&_nc_ht=scontent.fblr1-4.fna&tp=6&oh=37a1f65100379849a7e086dc9e697c51&oe=5F814450',
            message: 'Whats up :heart'
        },
        {
            name: 'Arpit',
            image: 'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-9/p960x960/117411674_3071504492897135_521212679289573870_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=vU74FSQIwmEAX88zqLm&_nc_ht=scontent.fblr1-4.fna&tp=6&oh=37a1f65100379849a7e086dc9e697c51&oe=5F814450',
            message: 'Howz it going?'
        },
        {
            message: "Howddyy!!"
        }
    ])
    return (
        <div className="chatScreen">
            <p className="chatScreen_timeStamp" >YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src = {message.image}
                        />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                )
            ))}

            <form className="chatScreen_input">
                <input className="chatScreen_inputField" placeholder="Type a message..." type='text'>
                </input>
                <button className="chatScreen_inputButton">SEND </button>
            </form>

        </div>
    )
}

export default ChatScreen;