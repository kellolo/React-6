import "./UserData.scss";
import React from "react";

export default function UserData(user) {
    return (
        <div id="UserData" className="p-d-flex p-ai-center">
            <img
                alt={user.userName}
                src={user.userPhoto}
                // onError="" 
                className="p-mr-2"
            />
            <div>{user.userName}</div>
        </div>
    );
}