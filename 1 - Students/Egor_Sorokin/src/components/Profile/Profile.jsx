import React, { Component, Fragment } from 'react'
import { Avatar, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './style.css'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let { myId, users } = this.props;

        let me = users.find(item => myId == item.id);

        return(
            <Fragment>
                <div className="profile">
                    <Link alt = "Home" to = "/">
                        <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowBackIosIcon />} />
                    </Link>
                    <div className="profile-header justify-content-center">
                        <Avatar alt="me" src={ me.avatar } />
                        <h2>{ me.name }</h2>
                        <p>{ me.email }</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ usersReducer }) => ({
    users: usersReducer.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);    