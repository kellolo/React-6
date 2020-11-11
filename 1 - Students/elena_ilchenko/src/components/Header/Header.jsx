
import React, { Fragment } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import Profile from '../Profile/Profile';

export default props => {
    return (
        <Fragment>
            <div className="Header">
                <h1>
                    {
                        props.chatName 
                            ? props.chatName 
                                : props.profile 
                                ? 'Profile'
                                : 'Welcome'
                    }
                    
                </h1>
                <Link className="profile-link" to={`/profile`}>
                    <div className="profileIcon">
                        <div>User's profile</div>
                        <PersonIcon 
                            style={{ color: '#0f5e5b' }}
                            fontSize="large"/>
                    </div>
                </Link>

                {//?? не плавное появление Profile когда переключаешься с чата, с начального роута плавное 
                }
                <Profile isOpen={props.profile}/>
            </div>
                
        </Fragment>
    )
}
    