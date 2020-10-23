import './style.css';
import React, { Fragment } from 'react';


export default (props) => {
    const {chat} = props;
    // const chat = {
    //     id: ch_1,
    //     title: "Ivanov",
    //     avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
    //      status: "Hi our deadlines are...",
    // }
    return (
        <Fragment>
            <li className="chats-list__item chats-list-item" key={chat.id}>
                <div className="chats-list-item__img img-container ">
                    <img src={chat.avatarUrl} alt={chat.title} className="img-container__img"/>
                </div>
                <div className="chats-list-item__details">
                    <h2 className="chats-list-item__name">{chat.title}</h2>
                    <p className="chats-list-item__label">{chat.status}</p>
                </div>
            </li> 
        </Fragment>
    );
}
