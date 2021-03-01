import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo! Whats Up!"
        timestamp="40 seconds ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
      />
      <Chat
        name="Elon Musk"
        message="Yo! Whats Up!"
        timestamp="35 minutes ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
      />
      <Chat
        name="Jeff Bezos"
        message="Yo!!!"
        timestamp="1 hour ago"
        profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
      />
      <Chat
        name="Mabel Chang"
        message="You dont deserve me!"
        timestamp="40 seconds ago"
        profilePic="https://scontent.fpen1-1.fna.fbcdn.net/v/t1.0-1/p200x200/64915127_2558534030836981_2608550354320621568_o.jpg?_nc_cat=102&ccb=3&_nc_sid=7206a8&_nc_ohc=FMvzdW7ET7EAX8NLL1r&_nc_ht=scontent.fpen1-1.fna&tp=6&oh=f361c3820f01356f8fd89d8156dba9f6&oe=606347ED"
      />
    </div>
  );
}

export default Chats;
