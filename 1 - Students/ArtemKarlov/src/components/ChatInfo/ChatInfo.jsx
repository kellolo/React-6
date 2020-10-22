import './style.css';
import React, { Fragment } from 'react';

export default (props) => {
    const {opponentName} = props;
    return (
        <Fragment>
            <div className="chat__header chat-header">
                    <p className="chat-header__label">Chat with</p>
                    <div className="chat-header__details">
                        <div className="chat-header__img img-container ">
                            <img src="/images/account_avatar_male_profile_user_icon_1218734.png" alt="" className="img-container__img" />
                        </div>                    
                        <h2 className="chat-header__title">{opponentName}</h2>
                    </div>                    
                </div>
        </Fragment>
    );
}



