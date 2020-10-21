import React, { Component, Fragment } from 'react'
import { Avatar, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom'


import './style.css'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        let { me } = this.props;

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
    