
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
                            : props.allChats.length > 0 
                                ? props.allChats[props.selected-1].chatName 
                                : 'Profile'
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
                {/* { props.profile ? <Profile /> : null} */}
                <Profile isOpen={props.profile}/>
            </div>
                
        </Fragment>
    )
}
    