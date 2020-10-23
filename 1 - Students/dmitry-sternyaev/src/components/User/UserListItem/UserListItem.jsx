import React from "react";

export default function UserListItem(user) {
    return (
        <div className="p-d-flex p-ai-center p-h-100">
            <img
                alt={user.userName}
                src={user.userPhoto}
                className="p-mr-2 p-rounded-circle p-h-list-icon"
            />
            <h4>{user.userName}</h4>
        </div>
    );
}