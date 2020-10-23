import "./ChatsItem.scss";
import React from "react";

export default function ChatsItem(chat) {
    return (
        <div id="ChatsItem" className="p-d-flex p-ai-center">
            <img
                alt={chat.userName}
                src={chat.userPhoto}
                // onError="" 
                className="p-mr-2"
            />
            <div>{chat.userName}</div>
        </div>
    );
}