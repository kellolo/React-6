import './style.css';
import React, { Fragment } from 'react';

export default (props) => {
    const {userName, avatarUrl} = props;
    return (
        <Fragment>
            <section className="layout__account account">
                    <div className="account__img img-container">
                        <img src={avatarUrl} alt="" className="img-container__img" />
                    </div>
                    <h1 className="account__name">{userName}</h1>
                    <p className="account__label">My acount</p>
                </section>
        </Fragment>
    );
}

