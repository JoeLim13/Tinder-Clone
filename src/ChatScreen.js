import React, { useState } from "react";
import "./chatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Mark",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      message: "Whats up",
    },
    {
      name: "Mark",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      message: "Whats up",
    },
    {
      message: "Hey",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH MARK ON 01/03/2021
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message...."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
