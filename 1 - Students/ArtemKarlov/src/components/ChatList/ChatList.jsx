import './style.css';
import React, { Fragment } from 'react';


export default class ChatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }


    componentDidMount() {
        console.log('MOUNTED');        
    }

    componentDidUpdate() {
      
        console.log('UPDATED');
    }

    render() {
        let { variable } = this.state;

        let contactList = [];
        
        return (
            <Fragment>
                <div className="chats__chats-list chats-list">
                    <ul>
                        <li className="chats-list__item chats-list-item">
                            <div className="chats-list-item__img img-container ">
                                <img src="/images/account_avatar_male_profile_user_icon_1218734.png" alt="" class="img-container__img"/>
                            </div>
                            <div className="chats-list-item__details">
                                <h2 className="chats-list-item__name"><a href="">Emmy Brown</a></h2>
                                <p className="chats-list-item__label">Hi our deadlines are...</p>
                            </div>
                        </li>                        
                        <li className="chats-list__item chats-list-item">
                            <div className="chats-list-item__img img-container ">
                                <img src="/images/account_avatar_male_profile_user_icon_1218734.png" alt="" class="img-container__img"/>
                            </div>
                            <div className="chats-list-item__details">
                                <h2 className="chats-list-item__name"><a href="">EJohn Doe</a></h2>
                                <p className="chats-list-item__label">Hi our deadlines are...</p>
                            </div>
                        </li>
                        <li className="chats-list__item chats-list-item">
                            <div className="chats-list-item__img img-container ">
                                <img src="/images/account_avatar_male_profile_user_icon_1218734.png" alt="" class="img-container__img"/>
                            </div>
                            <div className="chats-list-item__details">
                                <h2 className="chats-list-item__name"><a href="">Anna Barow</a></h2>
                                <p className="chats-list-item__label">Hi our deadlines are...</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Fragment>
           
        );
    }
}